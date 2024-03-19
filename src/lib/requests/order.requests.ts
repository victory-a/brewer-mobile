import { OrderStatus } from 'src/model/order.model';
import client from '../client';

export function getOrders(orderStatus?: OrderStatus) {
  const url = `/order${orderStatus ? `?order_status=${orderStatus}` : ''}`;
  return client.get(url);
}

export function getOrder(id: number) {
  return client.get(`/order/${id}`);
}

export function createOrder(payload: any) {
  return client.post('/order/create', payload);
}

export function updateOrder(payload: { id: number; status: OrderStatus }) {
  return client.patch(`/order/${payload.id}`, { order_status: payload.status });
}
