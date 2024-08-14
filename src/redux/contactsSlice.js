import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOps';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.added = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.deleted = true;
      })
      .addMatcher(
        isAnyOf(getContacts.pending, addContact.pending, deleteContact.pending),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { resetFlags } = slice.actions;
