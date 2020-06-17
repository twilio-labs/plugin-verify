import { combineReducers } from 'redux';

import { reduce as CustomTaskListReducer } from './CustomTaskListState';
import { reduce as VerifyReducer } from './VerifyState';

// Register your redux store under a unique namespace
export const namespace = 'verify';

// Combine the reducers
export default combineReducers({
  customTaskList: CustomTaskListReducer,
  verify: VerifyReducer,
});
