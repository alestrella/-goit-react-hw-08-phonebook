import toast from 'react-hot-toast';
import Box from 'components/Box';
import { ContactItem } from '../../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import NotificationText from 'components/NotificationText';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () =>
    contacts.filter(({ name }) => name.toLocaleLowerCase().includes(filter));

  const visibleContacts = filterContacts();
  console.log('filteredContacts :>> ', visibleContacts.length);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast('Bye... Deleted contact', {
      icon: '😢',
    });
  };

  return (
    <>
      {visibleContacts.length > 0 ? (
        <Box display="flex" flexDirection="column" as="ul">
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleDelete={() => handleDeleteContact(id)}
              />
            );
          })}
        </Box>
      ) : (
        <NotificationText message="Sorry, there is no contact by that name. Please try again" />
      )}
    </>
  );
};

export default ContactList;
