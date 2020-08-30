import {PayloadAction} from '../../redux-helpers/types';
import {User, UserId} from './types';

export const SET_USER = 'USER/SET_USER';
export type SetUser = PayloadAction<typeof SET_USER, UserId | undefined>;

export const LOAD_USER_DATA = 'USER/LOAD_USER_DATA';
export type LoadUserData = PayloadAction<
  typeof LOAD_USER_DATA,
  User | undefined
>;

export const setUser = (payload: UserId | undefined): SetUser => ({
  type: SET_USER,
  payload,
});

export const loadUserData = (payload: User | undefined): LoadUserData => ({
  type: LOAD_USER_DATA,
  payload,
});
