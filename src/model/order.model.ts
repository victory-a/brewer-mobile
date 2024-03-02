import { ISizes } from './product.model';

export type OrderStatus = 'pending' | 'completed' | 'cancelled';

export interface IOrderList {
  id: number;
  createdAt: Date;
  totalPrice: number;
  status: OrderStatus;
}

export interface IOrderProduct {
  productId: number;
  name: string;
  size: ISizes;
  quantity: number;
  image: string;
  basePrice: number;
  selectedSizePrice: number;
  variant: string;
}
export interface ISingleOrder {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  totalPrice: number;
  status: OrderStatus;
  products: IOrderProduct[];
}
