'use server'
import getToken from "@/lib/getToken";
import { IReviewData, IReviewResponse } from "@/types/review.type";
import { updateTag } from "next/cache";

export async function addReviewAction(reviewData:IReviewData,productId:string):Promise<IReviewResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products/${productId}/reviews`,{
        method:'POST',
        headers:{
            token: await getToken() as string,
            'content-type':'application/json'
        },
        body:JSON.stringify(reviewData)
    })
    const data = await response.json()
    return data
}

export async function removeReviewAction(reviewId: string) {
  const token = await getToken();

  const response = await fetch(
    `${process.env.BASE_URL}/api/v1/reviews/${reviewId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete review");
  }

  updateTag("productReviews");

  return true;
}