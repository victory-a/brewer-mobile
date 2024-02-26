import client from '../client';

export function getProducts() {
  return client.get('/product');
}
export function getAProduct(id: number) {
  return client.get(`/product/${id}`);
}
