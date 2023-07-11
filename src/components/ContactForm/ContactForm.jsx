import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropType from 'prop-types';
import { Button, FieldName, Form, Input } from './ContactForm.styled';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '' && number !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      onAddContact(newContact);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
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
  newContact: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  onAddContact: PropType.func.isRequired,
};
