// @ts-nocheck
import PortOne from '@portone/browser-sdk/v2';
import { supabase, hasSupabase } from './supabase';

const STORE_ID = import.meta.env.VITE_PORTONE_STORE_ID as string | undefined;
const CHANNEL_KAKAO = import.meta.env.VITE_PORTONE_CHANNEL_KEY_KAKAO as string | undefined;

export const portoneConfigured = Boolean(STORE_ID && CHANNEL_KAKAO);

export async function payProWithKakao(opts: { userId: string; email: string }) {
  if (!portoneConfigured) {
    throw new Error('PortOne 환경변수가 설정되지 않았습니다. .env.local 의 VITE_PORTONE_* 를 채워주세요.');
  }
  const paymentId = (crypto as any).randomUUID();
  const result = await PortOne.requestPayment({
    storeId: STORE_ID!,
    channelKey: CHANNEL_KAKAO!,
    paymentId,
    orderName: 'SQL 양파 Pro (1개월)',
    totalAmount: 9900,
    currency: 'KRW',
    payMethod: 'EASY_PAY',
    easyPay: { easyPayProvider: 'KAKAOPAY' },
    customer: {
      customerId: opts.userId,
      email: opts.email,
    },
  });

  if (!result || result.code) {
    throw new Error(result?.message || '결제가 취소되었거나 실패했어요.');
  }

  // MVP: RPC 가 서버측에서 PortOne API 로 금액/상태 검증 후 subscriptions insert
  if (hasSupabase) {
    const { error } = await supabase.rpc('upgrade_to_pro', {
      p_payment_id: paymentId,
      p_amount: 9900,
    });
    if (error) throw error;
  }

  return { paymentId };
}
