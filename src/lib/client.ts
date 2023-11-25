import axios from 'axios';
import { BASE_URL } from '@env';

import { getToken } from 'src/utils/auth';

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json'
};

const client = axios.create({
  baseURL: 'https://ebf2-41-73-1-70.ngrok-free.app',
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
    if (error?.response?.data?.message) {
      return Promise.reject(error.response.data);
    }
    throw new Error('An Error Occured, try again');
  }
);

export default client;
