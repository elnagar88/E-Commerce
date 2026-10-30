import { IPoductReview } from './../../types/review.type';
import { IReviewData } from "@/types/review.type";
import { addReviewAction, removeReviewAction } from "../actions/review.action";

export async function addReview(reviewData:IReviewData,productId:string) {
    const data = await addReviewAction(reviewData,productId)
    return data
}
export async function getProductReview(productId:string):Promise<IPoductReview> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products/${productId}/reviews`,{
        next:{tags:['productReviews']}
    }) 
    const data = await response.json()
    return data
}
export async function removeReview(reviewId:string) {
    const data = await removeReviewAction(reviewId)
    return data
}