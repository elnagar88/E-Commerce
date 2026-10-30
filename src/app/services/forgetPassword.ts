import { IForgetPassword, IForgetPasswordData, IOTP, IUserResetData, IVerifyCode } from "@/types/forgetPassword.type";
import { forgetPasswordAction, ResetPasswordAction, verifyRestCodeAction } from "../actions/forgetPassword.action";

export async function forgetPassword(userEmail:IForgetPasswordData):Promise<IForgetPassword> {
    const data = await forgetPasswordAction(userEmail)
    return data
}
export async function verifyRestCode(OTP:IOTP):Promise<IVerifyCode> {
    const data = await verifyRestCodeAction(OTP)
    return data
}
export async function ResetPassword(userResetData:IUserResetData):Promise<{token:string}> {
    const data = await ResetPasswordAction(userResetData)
    return data
}