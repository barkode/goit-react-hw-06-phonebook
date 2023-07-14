import PropType from 'prop-types';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

App.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string,
      name: PropType.string,
      number: PropType.string,
    })
  ),
};
