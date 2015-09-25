import { combineReducers } from 'redux';

import counters from './counters.js';
import loading from './loading.js';

export default combineReducers({
  counters,
  loading
});
