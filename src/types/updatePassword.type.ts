import { User } from "./userInfo.type"

export interface IUpdatePassData {
  currentPassword: string
  password: string
  rePassword: string
}
export interface IUpdateResponse {
  message: string
  user?: User
  token?: string
  errors?:Errors
}
export interface Errors {
  value: string
  msg: string
  param: string
  location: string
}