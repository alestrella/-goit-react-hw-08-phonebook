import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Box from 'components/Box';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import NotificationText from 'components/NotificationText';
import { Heading } from 'components/Headings/Headings.styled';
import ContactForm from 'components/ContactForm';
import { Container } from 'components/Container/Container';
import { getContacts } from 'redux/contacts/contactsSelectors';
// import { Loader } from 'components/Loader/Loader';

const ContactsView = () => {
  const contacts = useSelector(getContacts);

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
            {contacts?.length > 0 ? (
              <>
                <Filter />
                <ContactList />
              </>
            ) : (
              <NotificationText message="There are no contacts" />
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactsView;
