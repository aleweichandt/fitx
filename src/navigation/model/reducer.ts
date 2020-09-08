import {createReducer} from '../../redux-helpers';
import {
  SetCurrentScreen,
  SetNavigation,
  SET_CURRENT_SCREEN,
  SET_NAVIGATION,
} from './actions';
import {State} from './types';

export const initialState: State = {
  dispatch: undefined,
  currentScreen: '?',
};

const handleSetNavigation = (
  state: State,
  {payload: ref}: SetNavigation,
): State => ({
  ...state,
  dispatch: (!!ref && ref.dispatch) || state.dispatch,
});

const handleSetCurrentScreen = (
  state: State,
  {payload: currentScreen}: SetCurrentScreen,
): State => ({
  ...state,
  currentScreen,
});

const handlers = Object.freeze({
  [SET_NAVIGATION]: handleSetNavigation,
  [SET_CURRENT_SCREEN]: handleSetCurrentScreen,
});

export default createReducer<State>(handlers, initialState);
