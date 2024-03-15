import { OrderStatus } from 'src/model/order.model';
import client from '../client';

export function getOrders(orderStatus?: OrderStatus) {
  const url = `/order${orderStatus ? `?order_status=${orderStatus}` : ''}`;
  return client.get(url);
}

export function getOrder(id: number) {
  return client.get(`/order/${id}`);
}

export function createOrder() {
  return client.post('/order');
}

export function updateOrder(id: number) {
  return client.patch(`/order/${id}`);
}