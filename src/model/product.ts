export interface IProduct {
  id: number;
  name: string;
  variant: string;
  basePrice: number;
  image: HTMLImageElement;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  sizes: ['small' | 'medium' | 'large']; // CHABNGE TO OBJECT FROM BACKEND
  rating: number;
  small: number;
  medium: number;
  large: number;
}

export type sizes = 'small' | 'medium' | 'large';
