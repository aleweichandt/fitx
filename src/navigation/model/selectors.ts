import {createSelector} from 'reselect';
import {NavigationDispatchType, State, StateWithNavigationType} from './types';

const getNavigationState = ({navigation}: StateWithNavigationType): State =>
  navigation;

export const getDispatcher: (
  state: StateWithNavigationType,
) => NavigationDispatchType | undefined = createSelector(
  getNavigationState,
  ({dispatch}) => dispatch,
);

export const currentScreen: (
  state: StateWithNavigationType,
) => string = createSelector(
  getNavigationState,
  ({currentScreen: screen}) => screen,
);
