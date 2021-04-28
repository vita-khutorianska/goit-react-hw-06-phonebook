import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './Phonebook/Phonebook-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer);
export default store;
