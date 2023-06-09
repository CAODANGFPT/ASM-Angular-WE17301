export interface IProduct {
  _id?: number;
  name: string;
  priceNew: number;
  priceOld?: number;
  image?: string;
  quantity?: number;
  description?: string;
}
