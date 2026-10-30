"use server"

import { IAuthResponse, ILogin } from "@/types/auth.type"

export async function handleUserLogin(userData:ILogin):Promise<IAuthResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/signin`,{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            'content-type':'application/json'
        }
    })
    const data:IAuthResponse = await response.json()
    return data
}