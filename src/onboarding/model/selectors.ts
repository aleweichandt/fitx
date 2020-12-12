import {createSelector} from 'reselect';
import {loggedUser, StateWithUserType} from '../../user';
import {Step} from './types';

export const stepSelector: (state: StateWithUserType) => Step = createSelector(
  loggedUser,
  (user) => {
    const {name, metrics} = user || {};
    if (!name) {
      return 'username';
    }
    const {gender, weight} = metrics || {};
    if (!gender) {
      return 'gender';
    }
    if (!weight) {
      return 'metrics';
    }
    return 'done';
  },
);

export const needsOnboarding: (
  state: StateWithUserType,
) => boolean = createSelector(stepSelector, (step) => step !== 'done');
