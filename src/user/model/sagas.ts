import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import {call, put, spawn, take, takeLatest} from 'redux-saga/effects';
import {loginError, loginSuccess, LOGIN_REQUEST, LOGOUT} from './actions';

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
    const user: FirebaseAuthTypes.User = yield take(channel);
    yield put(loginSuccess(user.uid));
  }
}

function* login() {
  try {
    yield call([fbAuth, fbAuth.signInAnonymously]);
  } catch (e) {
    yield put(loginError(e));
  }
}

function* logout() {
  yield call([fbAuth, fbAuth.signOut]);
}

function* watchUserActions() {
  yield spawn(listenLoginStatus);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT, logout);
}

export default [watchUserActions];
