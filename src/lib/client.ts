import { create } from 'apisauce';

const client = create({
  baseURL: '',
  headers: { Accept: 'application/vnd.github.v3+json' }
});
