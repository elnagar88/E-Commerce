import { Brand, Category, Subcategory } from "./products.type"

export interface IResponseSubCategoriesProducts {
  results: number
  metadata: Metadata
  data: IDataSubCategoriesProducts[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface IDataSubCategoriesProducts {
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
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
}