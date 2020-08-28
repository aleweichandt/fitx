import {combineReducers} from 'redux';
import {reducer as login} from '../../login';
import {reducer as navigation} from '../../navigation';
import {reducer as user} from '../../user';

const reducer = combineReducers({
  ...login,
  ...navigation,
  ...user,
});

export default reducer;
