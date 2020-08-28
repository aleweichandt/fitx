import {createReducer} from '../../redux-helpers';
import {
  LoginErrorAction,
  LoginRequestAction,
  LoginSuccessAction,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  LogoutAction,
} from './actions';
import {State} from './types';

export const initialState: State = {
  loggingIn: false,
  error: undefined,
};

const handleLoginRequest = (
  state: State,
  action: LoginRequestAction, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
  loggingIn: true,
  error: undefined,
});

const handleLoginSuccess = (
  state: State,
  action: LoginSuccessAction, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
  loggingIn: false,
  error: undefined,
});

const handleLoginError = (state: State, action: LoginErrorAction): State => ({
  ...state,
  loggingIn: false,
  error: action.payload,
});

const handleLogout = (
  state: State,
  action: LogoutAction, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
});

const handlers = Object.freeze({
  [LOGIN_REQUEST]: handleLoginRequest,
  [LOGIN_SUCCESS]: handleLoginSuccess,
  [LOGIN_ERROR]: handleLoginError,
  [LOGOUT]: handleLogout,
});

export default createReducer<State>(handlers, initialState);
