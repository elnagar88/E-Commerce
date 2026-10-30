import { getProductReview } from '@/app/services/review.services'
import { Star, User } from 'lucide-react'
import RemoveReview from '../removeReview/RemoveReview'

export default async function ProductReviews({ productId }: { productId: string }) {
    const { data } = await getProductReview(productId)

    return data.map((review) => {
        return <div key={review._id} className="w-full mt-3 rounded-lg border border-slate-200 p-5">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                        <User />
                    </div>
                    <div>
                        <p className="text-sm font-medium">{review.user.name}</p>
                        <p className="text-xs text-slate-500">
                            {new Date(review.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: 'UTC' })}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={16}
                            className={star <= review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}
                        />
                    ))}
                </div>
            </div>

                <div className='flex justify-between'>
                     <h3 className="mt-4 text-sm font-semibold">{review.review}</h3>
                     <RemoveReview userId={review.user._id} reviewId={review._id}/>
                </div>
        </div>
    })
}
