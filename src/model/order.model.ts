import { ISizes } from './product.model';

export type OrderStatus = 'pending' | 'completed' | 'cancelled';

export interface IOrderList {
  id: number;
  createdAt: Date;
  totalPrice: number;
  status: OrderStatus;
}

export interface IProduct {
  id: number;
  name: string;
  size: ISizes;
  quantity: number;
  image: string;
  basePrice: number;
  variant: string;
  small: number;
  medium: number;
  large: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
  selectedSize: ISizes;
}

export interface ISingleOrder {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  totalPrice: number;
  status: OrderStatus;
  products: IProduct[];
}

export interface ICartState extends ICartSum {
  products: ICartProduct[];
}
export interface ICartSum {
  deliveryPrice: number;
  computedProductsTotal: number;
  computedGrandTotal: number;
}
