export interface ISubCategoriesResponse {
  results: number
  metadata: Metadata
  data: ISubCategoriesData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface ISubCategoriesData {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
}
