import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectNameFilter } from './selectors';
import { selectContacts } from '../contacts/selectors';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const normalizedFilter = nameFilter ? nameFilter.toLowerCase() : '';
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(nameFilter)
    );
  }
);
