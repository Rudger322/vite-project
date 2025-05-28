import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  userid: null,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
