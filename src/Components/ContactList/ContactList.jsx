import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../../Redux/Phonebook/phonebook-action';
const ContactList = ({ onDeleteContact, contacts }) => (
  <div className={styles.contact}>
    ContactList
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="submit"
              className={styles.contact_btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  // eslint-disable-next-line no-undef
  contacts: getFilter(items, filter),
});
const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(contactsAction.deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
