'use server'
import getToken from "@/lib/getToken"
import { ICartData } from "@/types/addToCart.types"
import { IClearCart } from "@/types/clearCart.type"
import { IDeleteProduct } from "@/types/deleteProduct.type"
import { IUserCartResponse } from "@/types/userCart.type"
import { revalidatePath, revalidateTag } from "next/cache"

export async function addToCartAction(productId:string):Promise<ICartData> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/cart`,{
        method:'POST',
        body:JSON.stringify({productId}),
        headers:{
            token:await getToken() as string,
            'content-type':'application/json'
        }        
    }
)
   const data:ICartData = await response.json()   
   revalidatePath('/cart')     
   revalidatePath('/wishlist')    
   revalidatePath(`/products/${productId}`)
   return data
}

export async function getLoggedUserCartAction():Promise<IUserCartResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/cart`,{
        headers:{
            token: await getToken() as string,
        },
        next:{tags:['userCart']}
    })
    const data:IUserCartResponse = await response.json()
    return data
}
export async function deleteProductCartAction(productId:string):Promise<IDeleteProduct> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/cart/${productId}`,{
        method:'DELETE',
        headers:{
            token: await getToken() as string
        }
    })
    const data:IDeleteProduct = await response.json() 
    revalidatePath('/cart')    
    revalidatePath('/wishlist')    
    revalidatePath(`/products/${productId}`)    
    return data
}
export async function clearCartAction():Promise<IClearCart> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/cart`,{
        method:'DELETE',
        headers:{
            token: await getToken() as string
        }
    })
    const data:IClearCart = await response.json()
    revalidatePath('/cart')
    revalidateTag('userCart','')
    return data
}
export async function updateQuantityAction(productId:string,count:number):Promise<IUserCartResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v2/cart/${productId}`,{
        method:'PUT',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify({count})
    })
    const data:IUserCartResponse = await response.json()
    revalidatePath('/cart')
    return data
}