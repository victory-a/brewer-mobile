import client from '../client';

export function getProducts(query?: string) {
  if (query) {
    return client.get(`/product?product_name=${query}`);
  } else {
    return client.get('/product');
  }
}
export function getAProduct(id: number) {
  return client.get(`/product/${id}`);
}
