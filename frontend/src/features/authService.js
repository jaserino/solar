// using to make a request to the backend api

import axios from 'axios';

const API_URL = '/api/users';

// Register the user

const register = async (userData) => {
  const response = await axios.post(API_URL);
};
