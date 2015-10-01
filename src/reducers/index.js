import { combineReducers } from 'redux';
import { drugs } from './drug-reducers';
import { status } from './status-reducers';
import { backpack } from './backpack-reducers';
import { modals } from './modals-reducers';

let reducers = combineReducers({
  drugs, status, backpack, modals
});

export default reducers;