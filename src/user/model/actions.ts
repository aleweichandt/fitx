import {Action, PayloadAction} from '../../redux-helpers/types';
import {User, UserUuid, UserMetrics} from './types';

export const SET_USER = 'USER/SET_USER';
export type SetUser = PayloadAction<typeof SET_USER, UserUuid | undefined>;

export const LOAD_USER_DATA = 'USER/LOAD_USER_DATA';
export type LoadUserData = PayloadAction<
  typeof LOAD_USER_DATA,
  User | undefined
>;

export const STORE_USER_DATA = 'USER/STORE_USER_DATA';
export type StoreUserData = Action<typeof STORE_USER_DATA>;

export const SET_USERNAME = 'USER/SET_USERNAME';
export type SetUsername = PayloadAction<typeof SET_USERNAME, string>;

export const SET_METRICS = 'USER/SET_METRICS';
export type SetMetrics = PayloadAction<
  typeof SET_METRICS,
  Partial<UserMetrics>
>;

export const setUser = (payload: UserUuid | undefined): SetUser => ({
  type: SET_USER,
  payload,
});

export const loadUserData = (payload: User | undefined): LoadUserData => ({
  type: LOAD_USER_DATA,
  payload,
});

export const storeUserData = (): StoreUserData => ({
  type: STORE_USER_DATA,
});

export const setUsername = (payload: string): SetUsername => ({
  type: SET_USERNAME,
  payload,
});

export const setMetrics = (payload: Partial<UserMetrics>): SetMetrics => ({
  type: SET_METRICS,
  payload,
});
