import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './Phonebook-actions';

const items = (state = [], action) => {
  return state;
};
const filter = (state = [], action) => {
  return state;
};
export default combineReducers({
  items,
  filter,
});

// const itemReducer = createReducer([], {
//   [actions.deleteContact]: (state, { payload }) => [
//     ...state.filter(({ id }) => id !== payload),
//   ],
// });
// export default combineReducers({
//   items: itemReducer,
// });
