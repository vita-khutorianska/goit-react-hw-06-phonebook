import shortid from 'shortid';
import types from './Phonebook-type';
import { createAction } from '@reduxjs/toolkit';
const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number: number,
    id: shortid.generate(),
  },
});
// console.log("this.state.contacts",this.state.contacts)
//   const exitingName = this.state.contacts.some(item => item.name === name);
//   console.log('exitingName', exitingName);
//   if (exitingName) {
//     window.alert(`LocalHost:3000 says ${name} is already in contact`);
//     return;
//   }
//   let contact = {
//     name,
//     number: number,
//     id: shortid.generate(),
//   };
//   this.setState(preState => {
//     return {
//       contacts: [contact, ...preState.contacts],
//     };
//   });

// ({ id, name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: { id: shortid.generate(), name, number },
//
// });
// (payload) => ({
//   type: actionTypes.FILTER_CHANGE,
//   payload,
// });
export const deleteContact = createAction('contacts/delete');

export default { addContact, deleteContact };
