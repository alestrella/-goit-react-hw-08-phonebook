import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import IconButton from 'features/IconButton';
import { Item, Name, Number } from './ContactItem.styled';
import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import Box from 'features/Box';

const ContactItem = ({ values }) => {
  const { id, name, number } = values;

  const dispatch = useDispatch();
  const { isLoading } = useContacts();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast('Bye... Deleted contact', {
      icon: '😢',
    });
  };

  return (
    <Item>
      <Box as="td">
        <Avatar
          name={name}
          size="36"
          textSizeRatio={2.8}
          round={true}
          color="#131212"
          fgColor="#BB86FC"
        />
      </Box>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Box as="td">
        <IconButton
          title="Delete"
          onClick={() => handleDelete(id)}
          disabled={isLoading}
        >
          <MdDeleteForever size={24} />
        </IconButton>
      </Box>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
