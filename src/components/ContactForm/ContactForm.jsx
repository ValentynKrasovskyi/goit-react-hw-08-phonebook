import {useState} from "react";
import './ContactForm.module.css';
import { addContact} from '../../redux/contactsSlice';
import { getContacts} from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";


export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
  
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
  
          default: alert('error');
            return;
              
        }
  
      };
       const handleSubmit = e => {
        e.preventDefault();
        const contact = {
          id:nanoid(),
          name: name,
          number: number,
        };     
        const isExist = contacts.some(
          contact =>
          (contact.name === name.toLowerCase() && contact.number === number) ||
          contact.number === number
      );
        isExist ? alert(`${name} is already in contacts`)
                : dispatch(addContact(contact));             
           
        
        setName('');
        setNumber('');
       
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"                 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
         />
         <input
            
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        <button type="submit">
            add contact
        </button>
    </form>
    )

}