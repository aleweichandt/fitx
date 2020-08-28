import {createSelector} from 'reselect';
import {StateWithLoginType} from './types';

export const getLoginState = ({login}: StateWithLoginType) => login;

export const loggingIn: (state: StateWithLoginType) => boolean = createSelector(
  getLoginState,
  ({loggingIn: status}) => status,
);
