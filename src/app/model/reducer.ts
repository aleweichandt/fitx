import {combineReducers} from 'redux';
import {reducer as navigation} from '../../navigation';
import {reducer as user} from '../../user';

const reducer = combineReducers({
  ...navigation,
  ...user,
});

export default reducer;
