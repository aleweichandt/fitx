import {createReducer} from '../../redux-helpers';
import {
  LoadUserData,
  LOAD_USER_DATA,
  SetMetrics,
  SetUsername,
  SET_METRICS,
  SET_USER,
} from './actions';
import {State, User} from './types';

export const initialState: State = {
  loggedUser: undefined,
};

export const handleLoadUserData = (
  state: State,
  action: LoadUserData,
): State => ({
  ...state,
  loggedUser: action.payload,
});

export const handleSetUsername = (
  state: State,
  action: SetUsername,
): State => ({
  ...state,
  loggedUser: {
    ...state.loggedUser,
    name: action.payload,
  } as User,
});

export const handleSetMetrics = (state: State, action: SetMetrics): State => ({
  ...state,
  loggedUser: {
    ...state.loggedUser,
    metrics: action.payload,
  } as User,
});

const handlers = Object.freeze({
  [LOAD_USER_DATA]: handleLoadUserData,
  [SET_USER]: handleSetUsername,
  [SET_METRICS]: handleSetMetrics,
});

export default createReducer<State>(handlers, initialState);
