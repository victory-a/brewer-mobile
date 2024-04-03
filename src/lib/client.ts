import axios from 'axios';
import { BASE_URL } from '@env';

import { deleteToken, getToken } from 'src/utils';

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json'
};

const client = axios.create({
  baseURL: 'https://f257-102-91-5-109.ngrok-free.app',
  // baseURL: BASE_URL,
  timeout: 60000,
  headers
});

client.interceptors.request.use(async function (config) {
  const token = await getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.request.status === 401) {
      deleteToken();
      return Promise.reject(error.response.data);
    }

    if (error?.response?.data?.message) {
      return Promise.reject(error.response.data);
    }
    throw new Error('An Error Occured, try again');
  }
);

export default client;
