-- 카카오 로그인 대응 (2026-11-18)
-- 카카오는 이메일 동의가 선택이라 이메일 없이 가입하는 사용자가 있다.
-- 0001 의 profiles.email 은 NOT NULL 이라 그대로 두면 가입 트리거가 실패하고
-- Supabase 가 "Database error saving new user" 로 로그인을 막는다.
-- 적용: Supabase 대시보드 → SQL Editor 에 붙여 넣고 실행 (0001 다음에).

alter table public.profiles alter column email drop not null;

-- 카카오 사용자 정보에는 full_name 대신 name·preferred_username(닉네임), picture 가 온다.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      new.raw_user_meta_data->>'preferred_username',
      new.raw_user_meta_data->>'nickname'
    ),
    coalesce(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture'
    )
  )
  on conflict (id) do nothing;
  return new;
end$$;
