export interface IAddressData {
  name: string
  details: string
  phone: string
  city: string
}
export interface IAddressResponse{
  status: string
  message: string
  data: IDataForAddress[]
}

export interface IAllAddress {
  results: number
  status: string
  data: IDataForAddress[]
}
export interface IDataForAddress {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}