import {call, select, takeEvery} from 'redux-saga/effects';
import {getDispatcher} from './selectors';

// react-navigation actions
const NavigationActions = [
  'INIT',
  'NAVIGATE',
  'SET_PARAMS',
  'BACK',
  'RESET',
  'REPLACE',
  'POP',
  'POP_TO_TOP',
  'PUSH',
  // OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER,
];

function* execNavigationAction(action: {type: string}) {
  const dispatch = yield select(getDispatcher);
  if (dispatch) {
    yield call(dispatch, action);
  }
}

function* watchNavigationActions() {
  yield takeEvery(NavigationActions, execNavigationAction);
}

export default [watchNavigationActions];
