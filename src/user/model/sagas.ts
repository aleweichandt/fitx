import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {call, put, takeLatest} from 'redux-saga/effects';
import {loadUserData, SetUser, SET_USER} from './actions';
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

function* watchUserActions() {
  yield takeLatest(SET_USER, handleSetUserSaga);
}

export default [watchUserActions];
