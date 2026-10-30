import { addToWishlistAction, getUserWishlistAction, removeProductwishlistAction } from "../actions/wishlist.action";

export async function getUserWishlist() {
    const data = await getUserWishlistAction()
    return data
}


export async function addToWishlist(productId:string) {
    const data = await addToWishlistAction(productId)
    return data
}
export async function removeProductwishlist(productId:string) {
    const data = await removeProductwishlistAction(productId)
    return data
}