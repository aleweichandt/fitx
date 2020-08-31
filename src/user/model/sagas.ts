import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
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

const USER_COLLECTION = 'users';

const db = firestore();
const usersTable = db.collection(USER_COLLECTION);

function* handleSetUserSaga({payload: uuid}: SetUser) {
  if (uuid) {
    let user: User = {uuid, metrics: undefined, name: undefined};
    try {
      const doc = usersTable.doc(uuid);
      const result: FirebaseFirestoreTypes.DocumentSnapshot = yield call([
        doc,
        doc.get,
      ]);
      if (result.exists) {
        user = result.data() as User;
      } else {
        throw Error('new user');
      }
    } catch (e) {}
    yield put(loadUserData(user));
  } else {
    yield put(loadUserData(undefined));
  }
}

function* handleStoreUserSaga() {
  const user: User | undefined = yield select(loggedUser);
  if (user) {
    const doc = usersTable.doc(user.uuid);
    yield call([doc, doc.set], user);
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
