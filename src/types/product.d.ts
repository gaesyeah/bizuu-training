import {Product} from './product.d';
export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductInCart = Product & {quantity: number};
