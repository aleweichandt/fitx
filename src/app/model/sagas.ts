import {all, fork} from 'redux-saga/effects';
import {sagas as loginSagas} from '../../login';
import {sagas as navigationSagas} from '../../navigation';
import {sagas as onboardingSagas} from '../../onboarding';
import {sagas as userSagas} from '../../user';

export default function* rootSaga() {
  const sagas = [
    ...userSagas,
    ...navigationSagas,
    ...loginSagas,
    ...onboardingSagas,
  ].map((saga) => fork(saga));
  yield all(sagas);
}
