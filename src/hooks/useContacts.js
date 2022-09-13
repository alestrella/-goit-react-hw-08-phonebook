import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getLoadingStatus,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);
  const filter = useSelector(getFilter);

  return { contacts, isLoading, filter };
};
