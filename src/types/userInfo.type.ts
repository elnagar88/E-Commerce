export interface IUserInfo {
  name: string
  email: string
  phone: string
}
export interface IUpdateUserInfo {
  message: string
  user?: User
  errors?:errors
}

export interface User {
  name: string
  email: string
  role: string
}
export interface errors {
  value: string
  msg: string
  param: string
  location: string
}

