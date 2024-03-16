export type ISizes = 'small' | 'medium' | 'large';

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
  variant: string;
  basePrice: number;
  image: HTMLImageElement;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  sizes: ISizes[];
  rating: number;
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
