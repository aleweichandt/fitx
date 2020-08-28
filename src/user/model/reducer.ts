import {createReducer} from '../../redux-helpers';
import {SetUser, SET_USER} from './actions';
import {State} from './types';

export const initialState: State = {
  loggedUser: undefined,
};

export const handleSetUser = (state: State, action: SetUser): State => ({
  ...state,
  loggedUser: action.payload,
});

const handlers = Object.freeze({
  [SET_USER]: handleSetUser,
});

export default createReducer<State>(handlers, initialState);
