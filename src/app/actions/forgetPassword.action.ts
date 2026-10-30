'use server'
import { IForgetPassword, IForgetPasswordData, IUserResetData, IVerifyResetCodedData } from './../../types/forgetPassword.type';
export async function forgetPasswordAction(userEmail:IForgetPasswordData):Promise<IForgetPassword> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/forgotPasswords`,{
        method:'POST',
        body:JSON.stringify(userEmail),
        headers:{
            'content-type':'application/json'
        }
    })
    const data = await response.json()

    return data
}

export async function verifyRestCodeAction(resetCode:IVerifyResetCodedData) {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/verifyResetCode`,{
        method:'POST',
        body:JSON.stringify(resetCode),
        headers:{
            'content-type':'application/json'
        }
    })
    const data = await response.json()

    return data
}

export async function ResetPasswordAction(userResetData:IUserResetData) {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/resetPassword`,{
        method:'PUT',
        body:JSON.stringify(userResetData),
        headers:{
            'content-type':'application/json'
        }
    })
    const data = await response.json()

    return data
}