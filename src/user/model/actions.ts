import {PayloadAction} from '../../redux-helpers/types';
import {User} from './types';

export const SET_USER = 'USER/SET_USER';
export type SetUser = PayloadAction<typeof SET_USER, User | undefined>;

export const setUser = (payload: User | undefined): SetUser => ({
  type: SET_USER,
  payload,
});
