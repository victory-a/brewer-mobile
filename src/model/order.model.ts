export type OrderStatus = 'pending' | 'completed' | 'cancelled';

export type IOrder = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  totalPrice: number;
  status: OrderStatus;
};

export type IAllOrders = Pick<IOrder, 'id' | 'createdAt' | 'status' | 'totalPrice'>;
