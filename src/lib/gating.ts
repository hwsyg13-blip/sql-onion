// @ts-nocheck
import { sqloUsage } from '../screens/PricingScreen';

export function canTakeMockQuestion(user: any) {
  return sqloUsage.checkLimit('mock', user);
}

export function canOpenExam(user: any, examId: string) {
  return sqloUsage.checkLimit('exam', user, examId);
}

export { sqloUsage };
