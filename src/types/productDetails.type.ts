import { Brand, Category, Subcategory } from "./products.type"

export interface IProductDetailsResponse {
  data: IProductDetails
}

export interface IProductDetails {
 sold: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  priceAfterDiscount: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  reviews: Review[]
  id: string
}

export interface Review {
  _id: string
  review: string
  rating: number
  product: string
  user: User
  createdAt: string
  updatedAt: string
  __v: number
}

export interface User {
  _id: string
  name: string
}
