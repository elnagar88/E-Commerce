import { Brand, Category, Subcategory } from "./products.type"

export interface IProductsOfBrand {
  results: number
  metadata: Metadata
  data: IDataProductsOfBrand[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface IDataProductsOfBrand {
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
  availableColors: any[]
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
}
