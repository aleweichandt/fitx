import {all, fork} from 'redux-saga/effects';
import {sagas as loginSagas} from '../../login';
import {sagas as navigationSagas} from '../../navigation';
import {sagas as userSagas} from '../../user';

export default function* rootSaga() {
  const sagas = [...userSagas, ...navigationSagas, ...loginSagas].map((saga) =>
    fork(saga),
  );
  yield all(sagas);
}
