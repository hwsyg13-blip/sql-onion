-- SQL 양파 — Initial schema
-- Run with: supabase db push   (or paste into Supabase SQL editor)

-- 1. profiles (auth.users 확장)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 2. subscriptions (플랜 진실의 원천)
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('free','pro')),
  status text not null check (status in ('active','canceled','expired','pending')),
  started_at timestamptz not null default now(),
  expires_at timestamptz,
  portone_payment_id text unique,
  amount_krw integer,
  created_at timestamptz not null default now()
);
create index if not exists idx_subscriptions_user on public.subscriptions (user_id, status, expires_at);

-- 3. quiz_attempts
create table if not exists public.quiz_attempts (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  chosen smallint not null,
  correct boolean not null,
  context text not null check (context in ('mock','exam','theory')),
  created_at timestamptz not null default now()
);
create index if not exists idx_attempts_user on public.quiz_attempts (user_id, created_at desc);

-- 4. exam_sessions
create table if not exists public.exam_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_set_id text not null,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  score integer,
  total integer not null default 50
);
create index if not exists idx_exams_user on public.exam_sessions (user_id, started_at desc);

-- 5. usage_daily (무료티어 일일 모의 카운터)
create table if not exists public.usage_daily (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  mock_count integer not null default 0,
  primary key (user_id, day)
);

-- RLS
alter table public.profiles      enable row level security;
alter table public.subscriptions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.exam_sessions enable row level security;
alter table public.usage_daily   enable row level security;

drop policy if exists "own profile read"   on public.profiles;
drop policy if exists "own profile update" on public.profiles;
drop policy if exists "own subs read"      on public.subscriptions;
drop policy if exists "own attempts read"  on public.quiz_attempts;
drop policy if exists "own attempts ins"   on public.quiz_attempts;
drop policy if exists "own exams all"      on public.exam_sessions;
drop policy if exists "own usage read"     on public.usage_daily;
drop policy if exists "own usage upsert"   on public.usage_daily;
drop policy if exists "own usage update"   on public.usage_daily;

create policy "own profile read"   on public.profiles      for select using (auth.uid() = id);
create policy "own profile update" on public.profiles      for update using (auth.uid() = id);

create policy "own subs read"      on public.subscriptions for select using (auth.uid() = user_id);
-- subscriptions insert/update 는 security definer RPC 또는 webhook(service role) 만 허용

create policy "own attempts read"  on public.quiz_attempts for select using (auth.uid() = user_id);
create policy "own attempts ins"   on public.quiz_attempts for insert with check (auth.uid() = user_id);

create policy "own exams all"      on public.exam_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own usage read"     on public.usage_daily   for select using (auth.uid() = user_id);
create policy "own usage upsert"   on public.usage_daily   for insert with check (auth.uid() = user_id);
create policy "own usage update"   on public.usage_daily   for update using (auth.uid() = user_id);

-- 편의 뷰: 활성 플랜
create or replace view public.current_plan as
  select distinct on (user_id) user_id, plan, status, started_at, expires_at
  from public.subscriptions
  where status = 'active' and (expires_at is null or expires_at > now())
  order by user_id, started_at desc;

-- 6. 결제 성공시 호출되는 RPC (MVP: 클라이언트에서 직접 호출)
-- 운영에서는 PortOne webhook 경유 권장 (service role 로 insert)
create or replace function public.upgrade_to_pro(
  p_payment_id text,
  p_amount integer
) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not authenticated';
  end if;

  -- 이미 같은 paymentId 로 insert 되어 있으면 idempotent 처리
  select id into v_id from public.subscriptions where portone_payment_id = p_payment_id;
  if v_id is not null then
    return v_id;
  end if;

  insert into public.subscriptions (
    user_id, plan, status, started_at, expires_at, portone_payment_id, amount_krw
  ) values (
    v_user, 'pro', 'active', now(), now() + interval '30 days', p_payment_id, p_amount
  ) returning id into v_id;

  return v_id;
end$$;

revoke all on function public.upgrade_to_pro(text, integer) from public;
grant execute on function public.upgrade_to_pro(text, integer) to authenticated;
