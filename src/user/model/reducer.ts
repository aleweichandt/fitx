import {createReducer} from '../../redux-helpers';
import {LoadUserData, LOAD_USER_DATA} from './actions';
import {State} from './types';

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

const handlers = Object.freeze({
  [LOAD_USER_DATA]: handleLoadUserData,
});

export default createReducer<State>(handlers, initialState);
