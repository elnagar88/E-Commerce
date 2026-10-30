'use server'

import getToken from "@/lib/getToken"
import { IAddToWishlist } from "@/types/addToWishlist.type";
import { IUserWishlist } from "@/types/userWishlist.type";
import { revalidatePath } from "next/cache";


export async function getUserWishlistAction():Promise<IUserWishlist> {
    const response= await fetch(`${process.env.BASE_URL}/api/v1/wishlist`,{
        headers:{
            token: await getToken() as string
        },
        cache:'force-cache'
    })
    const data = await response.json()
    return data
}

export async function addToWishlistAction(productId:string):Promise<IAddToWishlist> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/wishlist`,{
        method:'POST',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify({productId})
    })
    const data:IAddToWishlist = await response.json()
    revalidatePath('/wishlist')
    revalidatePath('/shop')
    revalidatePath(`/products/${productId}`)
    revalidatePath('/')
    return data
}
export async function removeProductwishlistAction(productId:string):Promise<IAddToWishlist> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/wishlist/${productId}`,{
        method:'DELETE',
        headers:{
            token: await getToken() as string,
        },
    })
    const data:IAddToWishlist = await response.json()
    revalidatePath('/wishlist')
    revalidatePath('/shop')
    revalidatePath(`/products/${productId}`)
    revalidatePath('/')
    return data
}