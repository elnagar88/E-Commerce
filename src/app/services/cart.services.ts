import { addToCartAction, clearCartAction, deleteProductCartAction, getLoggedUserCartAction, updateQuantityAction } from "@/app/actions/Cart.action";

export async function addToCart(productId:string) {
    const data = await addToCartAction(productId)    
    return data
}

export async function getLoggedUserCart() {
    const data = await getLoggedUserCartAction()        
    return data
}
export async function deleteProductCart(productId:string) {
    const data = await deleteProductCartAction(productId)
    return data
}
export async function clearCart() {
    const data = await clearCartAction()
    return data
}
export async function updateQuantity(productId:string,count:number) {
    const data = await updateQuantityAction(productId,count)
    return data
}