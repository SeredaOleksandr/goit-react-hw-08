import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi, setToken } from '../../config/goitApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authorization token found');
      setToken(token);

      const { data } = await goitApi.get('contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await goitApi.post('contacts', contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await goitApi.delete(`contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async ({ id, contactChange }, thunkAPI) => {
//     try {
//       const { data } = await goitApi.patch(`contacts/${id}`, contactChange);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
