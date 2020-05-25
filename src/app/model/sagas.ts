import {all, fork} from 'redux-saga/effects';
import {sagas as navigationSagas} from '../../navigation';

export default function* rootSaga() {
  const sagas = [...navigationSagas].map((saga) => fork(saga));
  yield all(sagas);
}
