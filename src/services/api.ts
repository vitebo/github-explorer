import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_AUTHORIZATION,
  },
});

export default api;
