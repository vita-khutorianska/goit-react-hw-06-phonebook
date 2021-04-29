import shortid from 'shortid';
import types from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number: number,
//     id: shortid.generate(),
//   },
// });
// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });
// const filterChange = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: { id: shortid.generate(), name, number },
}));
export const filterChange = createAction('contacts/filter');
export const deleteContact = createAction('contacts/delete');
export default { addContact, deleteContact, filterChange };
