import {PayloadAction} from '../../redux-helpers/types';

export const SUBMIT_USERNAME = 'ONBOARDING/SUBMIT_USERNAME';
export type SubmitUsername = PayloadAction<typeof SUBMIT_USERNAME, string>;

export const submitUsername = (payload: string): SubmitUsername => ({
  type: SUBMIT_USERNAME,
  payload,
});
