import { combineReducers } from 'redux';
import { drugs } from './drug-reducers';
import { status } from './status-reducers';
import { backpack } from './backpack-reducers';
import { modals } from './modals-reducers';
import { tomorrow } from './tomorrow-reducers';
import { informations } from './informations-reducers';

let reducers = combineReducers({
  drugs, status, backpack, modals, tomorrow, informations
});

export default reducers;