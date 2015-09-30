import { combineReducers } from 'redux';
import { drugs } from './drug-reducers';
import { status } from './status-reducers';

let reducers = combineReducers({
  drugs, status
});

export default reducers;