// import { useMemo } from 'react';
import NotificationText from 'features/NotificationText';
import ContactItem from 'components/ContactItem';
import { useContacts } from 'hooks';
import { Table } from './ContactList.styled';
import Box from 'features/Box';

const ContactList = () => {
  const { contacts, filter } = useContacts();

  // const filteredContacts = useMemo(() => {
  //   return (
  //     contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(filter.toLowerCase())
  //     ) ?? []
  //   );
  // }, [contacts, filter]);

  const filterContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  const visibleContacts = filterContacts();

  return (
    <>
      {visibleContacts.length > 0 ? (
        <Table>
          <Box as="tbody">
            {visibleContacts.map(contact => (
              <ContactItem key={contact.id} values={contact} />
            ))}
          </Box>
        </Table>
      ) : (
        <NotificationText message="Sorry, there is no contact by that name. Please try again" />
      )}
    </>
  );
};

export default ContactList;
