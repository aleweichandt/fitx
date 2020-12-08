import {createReducer} from '../../redux-helpers';
import {NextStep, NEXT_STEP, PrevStep, PREV_STEP} from './actions';
import {State, Step} from './types';

export const initialState: State = {step: 'username'};

const nextSteps: {[key: string]: Step} = {
  username: 'metrics',
  metrics: 'done',
};
const preVsteps: {[key: string]: Step} = {
  metrics: 'username',
  done: 'metrics',
};

export const handleNextStep = (
  state: State,
  action: NextStep, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
  step: nextSteps[state.step] || state.step,
});

export const handlePrevStep = (
  state: State,
  action: PrevStep, // eslint-disable-line @typescript-eslint/no-unused-vars
): State => ({
  ...state,
  step: preVsteps[state.step] || state.step,
});

const handlers = Object.freeze({
  [NEXT_STEP]: handleNextStep,
  [PREV_STEP]: handlePrevStep,
});

export default createReducer<State>(handlers, initialState);
