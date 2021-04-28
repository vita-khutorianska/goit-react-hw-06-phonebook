import shortid from 'shortid';
import types from './phonebook-types';

const addContacts = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number: number,
    id: shortid.generate(),
  },
});
const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export default { addContacts, deleteContacts };
