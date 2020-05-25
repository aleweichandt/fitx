import {combineReducers} from 'redux';
import {reducer as navigation} from '../../navigation';

const reducer = combineReducers({
  ...navigation,
});

export default reducer;
