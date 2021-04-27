import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phone-actions';

const itemReducer = createReducer([], {
  [actions.deleteContact]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});
export default combineReducers({
  items: itemReducer,
});
