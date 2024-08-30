import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logoutUser } from '../auth/operations';
import items from '../../contact.json';

const initialState = {
  items: items,
  loading: false,
  error: null,
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      });
  },
});

export const contactsReducer = slice.reducer;
