import axios from 'axios';
import { BASE_URL } from '@env';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);

export default client;
