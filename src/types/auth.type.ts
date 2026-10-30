export interface ISignIn {
  name: string
  email: string
  password: string
  rePassword: string
  phone: string
}
export interface ILogin {
  email: string
  password: string
}
export interface IAuthResponse {
  message: string
  user?: IUser
  token?: string
  statusMsg?:string
}

export interface IUser {
  name: string
  email: string
  role: string
}
