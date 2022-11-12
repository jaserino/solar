// using createAsyncThunk to create an action that takes data from the for and submits it to the backend

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// registers a new user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log(user);
  }
);

// login an existing use
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions;

export default authSlice.reducer;
