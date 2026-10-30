'use server'

import getToken from "@/lib/getToken"
import { IAddressData, IAddressResponse, IAllAddress } from "@/types/address.type"
import { IDeleteAddress } from "@/types/deleteAddress.type"
import { revalidateTag } from "next/cache"

export async function getUserAddressAction():Promise<IAllAddress> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/addresses`,{
        headers:{
            token: await getToken()as string
        },
        cache:"force-cache",
        next:{
            tags:['userAddress']
        }
    })
    const data:IAllAddress = await response.json()
    return data
}

export async function addAddressAction(addressData:IAddressData):Promise<IAddressResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/addresses`,{
        method:'POST',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify(addressData)
    })
    const data:IAddressResponse = await response.json()
    revalidateTag('userAddress','')
    return data
}

export async function deleteAddressAction(addressId:string):Promise<IDeleteAddress> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/addresses/${addressId}`,{
        method:'DELETE',
        headers:{
            token: await getToken() as string
        }
    })
    const data = await response.json()
    revalidateTag('userAddress','')
    return data
}
