import {createReducer} from '../../redux-helpers';
import {SubmitUsername, SUBMIT_USERNAME} from './actions';
import {State} from './types';

export const initialState: State = {step: 'username'};

export const handlesubmitUsername = (
  state: State,
  action: SubmitUsername, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
  step: 'metrics',
});

const handlers = Object.freeze({
  [SUBMIT_USERNAME]: handlesubmitUsername,
});

export default createReducer<State>(handlers, initialState);
