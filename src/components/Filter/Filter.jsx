import { useDispatch } from 'react-redux';
import { Field, Label } from './Filter.styled';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useContacts } from 'hooks';

const Filter = () => {
  const dispatch = useDispatch();

  const { filter } = useContacts();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Field value={filter} onChange={handleFilter} placeholder="Enter name" />
    </Label>
  );
};

export default Filter;
