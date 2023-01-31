import propTypes from 'prop-types';
import { ContactsList, ContactsBtn, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactsBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContactsBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};