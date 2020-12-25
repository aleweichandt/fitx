import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchUser, storeUser} from '../service';
import {
  loadUserData,
  SetUser,
  SET_METRICS,
  SET_USER,
  SET_USERNAME,
  storeUserData,
  STORE_USER_DATA,
} from './actions';
import {loggedUser} from './selectors';
import {User} from './types';

function* handleSetUserSaga({payload: uuid}: SetUser) {
  if (uuid) {
    let user: User = {uuid, metrics: undefined, name: undefined};
    try {
      user = yield call(fetchUser, uuid);
    } catch (e) {}
    yield put(loadUserData(user));
  } else {
    yield put(loadUserData(undefined));
  }
}

function* handleStoreUserSaga() {
  const user: User | undefined = yield select(loggedUser);
  if (user) {
    yield call(storeUser, user);
  }
}

function* triggerBackup() {
  yield put(storeUserData());
}

function* watchUserActions() {
  yield takeLatest(SET_USER, handleSetUserSaga);
  yield takeLatest(STORE_USER_DATA, handleStoreUserSaga);
  yield takeEvery([SET_USERNAME, SET_METRICS], triggerBackup);
}

export default [watchUserActions];
