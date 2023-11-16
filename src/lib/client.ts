import { create } from 'apisauce';
import { BASE_URL } from '@env';

const client = create({
  baseURL: BASE_URL,
  headers: { Accept: 'application/vnd.github.v3+json' }
});
