'use server'

import getToken from "@/lib/getToken"
import { IOrderAddress, IOrderCashResponse } from "@/types/orders.type"
import { revalidatePath } from "next/cache"

export async function createCashOrderAction(cartId:string,values:IOrderAddress):Promise<IOrderCashResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/orders/${cartId}`,{
        method:'POST',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify({shippingAddress:values})
    })
    const data = await response.json()
    revalidatePath('/cart')
    return data
}