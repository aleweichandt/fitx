import {all, fork} from 'redux-saga/effects';
import {sagas as loginSagas} from '../../login';
import {sagas as navigationSagas} from '../../navigation';

export default function* rootSaga() {
  const sagas = [...navigationSagas, ...loginSagas].map((saga) => fork(saga));
  yield all(sagas);
}
