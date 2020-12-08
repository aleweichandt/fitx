import {combineReducers} from 'redux';
import {reducer as login} from '../../login';
import {reducer as navigation} from '../../navigation';
import {reducer as onboarding} from '../../onboarding';
import {reducer as user} from '../../user';

const reducer = combineReducers({
  ...login,
  ...navigation,
  ...onboarding,
  ...user,
});

export default reducer;
