import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import {call, put, spawn, take, takeLatest} from 'redux-saga/effects';
import {
  loginError,
  loginSuccess,
  LOGIN_REQUEST,
  LOGOUT,
} from '../../login/model/actions';
import {setUser} from '../../user';

const fbAuth = auth();

const authStatusChannel = () =>
  eventChannel<FirebaseAuthTypes.User>((emitter) => {
    fbAuth.onAuthStateChanged((user) => {
      if (user != null) {
        emitter(user);
      }
    });
    return () => fbAuth.onAuthStateChanged(() => {});
  });

function* listenLoginStatus() {
  const channel = yield call(authStatusChannel);
  while (true) {
    const firebaseUser: FirebaseAuthTypes.User = yield take(channel);
    yield put(setUser(firebaseUser.uid));
  }
}

function* login() {
  try {
    yield call([fbAuth, fbAuth.signInAnonymously]);
    yield put(loginSuccess());
  } catch (e) {
    yield put(loginError(e));
  }
}

function* logout() {
  yield call([fbAuth, fbAuth.signOut]);
  yield put(setUser(undefined));
}

function* watchUserActions() {
  yield spawn(listenLoginStatus);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT, logout);
}

export default [watchUserActions];
