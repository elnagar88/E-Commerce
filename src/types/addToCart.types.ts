
export interface ICartData {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: ICart;
}

export interface ICart {
  _id: string;
  cartOwner: string;
  products: ICartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface ICartItem {
  count: number;
  _id: string;
  product: ICartProduct;
  price: number;
}

export interface ICartProduct {
  subcategory: ISubcategory[];
  _id: string;
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  ratingsAverage: number;
  id: string;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
