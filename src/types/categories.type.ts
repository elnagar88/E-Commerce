export interface ICategoriesResponse {
  results: number
  metadata: Metadata
  data: IDataCategories[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface IDataCategories {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
