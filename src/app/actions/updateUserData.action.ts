'use server'

import getToken from "@/lib/getToken"
import { IUpdatePassData, IUpdateResponse } from "@/types/updatePassword.type"
import { IUpdateUserInfo, IUserInfo } from "@/types/userInfo.type"

export async function updateUserInfoAction(userInfo:IUserInfo):Promise<IUpdateUserInfo> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/users/updateMe/`,{
        method:'PUT',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify(userInfo)
    })
    const data = await response.json()
    return data
}

export async function updatePasswordAction(passwordData:IUpdatePassData):Promise<IUpdateResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/users/changeMyPassword`,{
        method:'PUT',
        headers:{
            token : await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify(passwordData)
    })
    const data = await response.json()
    return data
}