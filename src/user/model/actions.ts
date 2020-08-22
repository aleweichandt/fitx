import {Action, PayloadAction} from '../../redux-helpers/types';
import {Credentials, User} from './types';

export const LOGIN_REQUEST = 'USER/LOGIN_REQUEST';

export type LoginRequestAction = PayloadAction<
  typeof LOGIN_REQUEST,
  Credentials
>;

export const LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
export type LoginSuccessAction = PayloadAction<typeof LOGIN_SUCCESS, User>;

export const LOGIN_ERROR = 'USER/LOGIN_ERROR';
export type LoginErrorAction = PayloadAction<typeof LOGIN_ERROR, Error>;

export const LOGOUT = 'USER/LOGOUT';
export type LogoutAction = Action<typeof LOGOUT>;

export const loginRequest = (credentials: Credentials): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (error: Error): LoginErrorAction => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
