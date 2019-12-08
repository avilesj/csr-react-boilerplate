import { combineReducers } from 'redux';
import { testReducer } from './testReducer.js';

export default combineReducers({
  testContext: testReducer
});
