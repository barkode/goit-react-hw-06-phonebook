import PropType from 'prop-types';
import { Button, List, ListItem } from './ContactList.styled';

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name} || {number}
            <Button
              type="button"
              title="Delete contact"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  handleDeleteContact: PropType.func.isRequired,
};
