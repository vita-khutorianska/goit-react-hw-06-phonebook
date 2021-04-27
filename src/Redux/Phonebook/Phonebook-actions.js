import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

// ({ id, name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: { id: shortid.generate(), name, number },
//   x: 5,
// });
// (payload) => ({
//   type: actionTypes.FILTER_CHANGE,
//   payload,
// });
export const deleteContact = createAction('contacts/delete');

// export default {addContact, filterChange, deleteContact };
