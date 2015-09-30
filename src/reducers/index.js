import { combineReducers } from 'redux';
import { drugs } from './drug-reducers';

let reducers = combineReducers({
  drugs
});

export default reducers;