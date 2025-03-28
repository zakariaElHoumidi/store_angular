export interface IProduct {
  _id: string,
  title: string,
  image: string,
  price: number,
  description: string,
  brand: string,
  model: string,
  color: string,
  category: string,
  discount: number,
  popular: boolean,
  isAddedToCart: boolean
}
