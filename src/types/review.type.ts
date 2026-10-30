export interface IReviewData {
  review: string
  rating: number
}
export interface IReviewResponse {
  data?: Data
  error?:Error
}

export interface Error {
  message: string
  errors: Errors
}

export interface Errors {
  value: string
  msg: string
  param: string
  location: string
}


export interface Data {
  _id: string
  review: string
  rating: number
  product: string
  user: string
  createdAt: string
  updatedAt: string
  __v: number
}
export interface IPoductReview {
  results: number
  metadata: Metadata
  data: Daum[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface Daum {
  _id: string
  review: string
  rating: number
  product: string
  user: User
  createdAt: string
  updatedAt: string
}

export interface User {
  _id: string
  name: string
}

