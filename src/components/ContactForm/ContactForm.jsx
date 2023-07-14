import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, FieldName, Form, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        alert(`${name} is already in contacts`);
        return;
      }

      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldName>Abonent name</FieldName>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter abonent name"
        value={name}
        onChange={handleChange}
        required
      />
      <FieldName>Abonent phone number</FieldName>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
        required
      />
      <p>
        <Button type="submit">Add contact</Button>
      </p>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
  onSubmit: propTypes.func,
};
