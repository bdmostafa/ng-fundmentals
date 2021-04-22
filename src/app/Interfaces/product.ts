export interface IProduct {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
  expireDate: Date;
  favorite: boolean;
}