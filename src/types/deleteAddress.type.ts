export interface IDeleteAddress {
  status: string
  message: string
  data: IDeleteAddressData[]
}

export interface IDeleteAddressData {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}
