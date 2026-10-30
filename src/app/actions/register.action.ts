"use server"

import { IAuthResponse, ISignIn } from "@/types/auth.type";

export async function handleUserRegister(userData:ISignIn):Promise<IAuthResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/signup`,{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(userData)
    })
    const data:IAuthResponse = await response.json()
    return data    
}