import shortid from 'shortid';
import types from './phonebook-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number: number,
    id: shortid.generate(),
  },
});
const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});
const filterChange = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, filterChange };
