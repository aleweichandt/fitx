import {Action, PayloadAction} from '../../redux-helpers/types';
import {UserMetrics} from '../../user';

export const SUBMIT_USERNAME = 'ONBOARDING/SUBMIT_USERNAME';
export type SubmitUsername = PayloadAction<typeof SUBMIT_USERNAME, string>;

export const SUBMIT_METRICS = 'ONBOARDING/SUBMIT_METRICS';
export type SubmitMetrics = PayloadAction<
  typeof SUBMIT_METRICS,
  Partial<UserMetrics>
>;

export const NEXT_STEP = 'ONBOARDING/NEXT_STEP';
export type NextStep = Action<typeof NEXT_STEP>;

export const PREV_STEP = 'ONBOARDING/PREV_STEP';
export type PrevStep = Action<typeof PREV_STEP>;

export const submitUsername = (payload: string): SubmitUsername => ({
  type: SUBMIT_USERNAME,
  payload,
});

export const submitMetrics = (
  payload: Partial<UserMetrics>,
): SubmitMetrics => ({
  type: SUBMIT_METRICS,
  payload,
});

export const nextStep = (): NextStep => ({
  type: NEXT_STEP,
});

export const prevStep = (): PrevStep => ({
  type: PREV_STEP,
});
