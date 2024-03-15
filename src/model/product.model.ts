export type ISizes = 'small' | 'medium' | 'large';

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
