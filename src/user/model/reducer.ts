import {createReducer} from '../../redux-helpers';
import {
  LoadUserData,
  LOAD_USER_DATA,
  SetMetrics,
  SetUsername,
  SET_METRICS,
  SET_USERNAME,
} from './actions';
import {State, User, UserMetrics} from './types';

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

export const handleSetUsername = (state: State, action: SetUsername): State => {
  const loggedUser: Partial<User> = state.loggedUser || {};
  return {
    ...state,
    loggedUser: {
      ...loggedUser,
      name: action.payload,
    } as User,
  };
};

export const handleSetMetrics = (state: State, action: SetMetrics): State => {
  const loggedUser: Partial<User> = state.loggedUser || {};
  const metrics: Partial<UserMetrics> = loggedUser.metrics || {};
  return {
    ...state,
    loggedUser: {
      ...loggedUser,
      metrics: {...metrics, ...action.payload},
    } as User,
  };
};

const handlers = Object.freeze({
  [LOAD_USER_DATA]: handleLoadUserData,
  [SET_USERNAME]: handleSetUsername,
  [SET_METRICS]: handleSetMetrics,
});

export default createReducer<State>(handlers, initialState);
