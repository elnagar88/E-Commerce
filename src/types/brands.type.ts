export interface IBrandsResponse {
  results: number
  metadata: Metadata
  data: IBrandsData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface IBrandsData {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
