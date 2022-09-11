import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return { user: data.user, token: data.token };
    } catch (error) {
      const { status } = error.response.status;
      switch (status) {
        case 400:
          return rejectWithValue('This email is already registered');

        case 500:
          return rejectWithValue('Something is wrong with connection');

        default:
          return rejectWithValue(
            `An unknown error occured, error code: ${status}`
          );
      }
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return { user: data.user, token: data.token };
    } catch (error) {
      const { status } = error.response.status;
      switch (status) {
        case 400:
          return rejectWithValue('This email is already registered');

        default:
          return rejectWithValue('Incorrect name or password');
      }
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      const { status } = error.response.status;
      switch (status) {
        case 401:
          return rejectWithValue(
            'Access token is missing in the request header'
          );

        case 500:
          return rejectWithValue('Something is wrong with connection');

        default:
          return rejectWithValue(
            `An unknown error occured, error code: ${status}`
          );
      }
    }
  }
);
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('No token, leaving fetchCurrentUser');
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      const { status } = error.response.status;
      switch (status) {
        case 401:
          return rejectWithValue(
            'Access token is missing in the request header'
          );

        default:
          return rejectWithValue(
            `An unknown error occured, error code: ${status}`
          );
      }
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
