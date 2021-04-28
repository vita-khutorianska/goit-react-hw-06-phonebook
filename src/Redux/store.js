import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './Phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
