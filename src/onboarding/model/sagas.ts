import {put, select, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../navigation';
import {setMetrics, setUsername} from '../../user';
import {
  SubmitMetrics,
  SubmitUsername,
  SUBMIT_METRICS,
  SUBMIT_USERNAME,
} from './actions';
import {stepSelector} from './selectors';
import {Step} from './types';

function* handleSubmitUsernameSaga(action: SubmitUsername) {
  const {payload: username} = action;
  yield put(setUsername(username));
  yield put(navigate({name: 'genderStep'}));
}

function* handleSubmitMetricsSaga(action: SubmitMetrics) {
  const {payload: metrics} = action;
  yield put(setMetrics(metrics));
  const step: Step = yield select(stepSelector);
  if (step === 'metrics') {
    yield put(navigate({name: 'metricsStep'}));
  }
}

function* watchOnboardingActions() {
  yield takeLatest(SUBMIT_USERNAME, handleSubmitUsernameSaga);
  yield takeLatest(SUBMIT_METRICS, handleSubmitMetricsSaga);
}

export default [watchOnboardingActions];
