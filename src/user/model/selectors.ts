import {createSelector} from 'reselect';
import {StateWithUserType, User} from './types';

export const getUserState = ({user}: StateWithUserType) => user;

export const loggedUser: (
  state: StateWithUserType,
) => User | undefined = createSelector(
  getUserState,
  ({loggedUser: user}) => user,
);
