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
export default addContacts;
