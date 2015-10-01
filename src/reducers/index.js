import { combineReducers } from 'redux';
import { drugs } from './drug-reducers';
import { status } from './status-reducers';
import { backpack } from './backpack-reducers';

let reducers = combineReducers({
  drugs, status, backpack
});

export default reducers;