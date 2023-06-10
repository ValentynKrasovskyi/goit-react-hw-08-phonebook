
import './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/auth/selectors'; 
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactList = () => { 
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
