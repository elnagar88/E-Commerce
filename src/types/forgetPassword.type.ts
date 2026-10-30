export interface IForgetPasswordData {
  email: string
}
export interface IVerifyResetCodedData {
  resetCode: string
}
export interface IForgetPassword {
  statusMsg: string
  message: string
}
export interface IOTP {
  resetCode: string
}
export interface IVerifyCode {
  status: string
}
export interface IUserResetData {
    email: string,
    newPassword: string
}


