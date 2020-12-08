import {put, takeLatest} from 'redux-saga/effects';
import {setUsername} from '../../user';
import {nextStep, SubmitUsername, SUBMIT_USERNAME} from './actions';

function* handleSubmitUsernameSaga(action: SubmitUsername) {
  const {payload: username} = action;
  yield put(setUsername(username));
  yield put(nextStep());
}

function* watchOnboardingActions() {
  yield takeLatest(SUBMIT_USERNAME, handleSubmitUsernameSaga);
}

export default [watchOnboardingActions];
