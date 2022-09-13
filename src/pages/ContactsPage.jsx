import { Helmet } from 'react-helmet';
import Box from 'features/Box';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import NotificationText from 'features/NotificationText';
import ContactForm from 'components/ContactForm';
import { Container } from 'features/Container/Container';
import { Heading } from 'features/Headings/Headings.styled';
import { useContacts } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Box py={5} as="section">
        <Box px={4}>
          <Container>
            <Heading>New contact</Heading>
            <ContactForm />
          </Container>

          <Container>
            <Heading>Contacts</Heading>
            <Filter />
            {contacts.length > 0 && <ContactList />}
            {contacts.length === 0 && !isLoading && (
              <NotificationText message="There are no contacts" />
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactsPage;
