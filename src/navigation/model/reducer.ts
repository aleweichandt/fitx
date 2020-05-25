import {createReducer} from '../../redux-helpers';
import {SetNavigationAction, SET_NAVIGATION} from './actions';
import {State} from './types';

export const initialState: State = {
  dispatch: undefined,
};

const handleSetNavigation = (
  state: State,
  {payload: ref}: SetNavigationAction,
): State => ({
  ...state,
  dispatch: (!!ref && ref.dispatch) || state.dispatch,
});

const handlers = Object.freeze({
  [SET_NAVIGATION]: handleSetNavigation,
});

export default createReducer<State>(handlers, initialState);
