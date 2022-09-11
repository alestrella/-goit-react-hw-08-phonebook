import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addContact.rejected]: state => {
      state.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default contactsReducer.reducer;
export const { setFilter } = contactsReducer.actions;
