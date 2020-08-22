import {all, fork} from 'redux-saga/effects';
import {sagas as navigationSagas} from '../../navigation';
import {sagas as userSagas} from '../../user';

export default function* rootSaga() {
  const sagas = [...navigationSagas, ...userSagas].map((saga) => fork(saga));
  yield all(sagas);
}
