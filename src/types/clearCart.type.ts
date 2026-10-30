export interface IClearCart {
  status: string
  message: string
  numOfCartItems: number
  cartId: any
  data: Data
}

export interface Data {
  products: any[]
  totalCartPrice: number
}
