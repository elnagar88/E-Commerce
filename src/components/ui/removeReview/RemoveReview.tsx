'use client'
import { useSession } from 'next-auth/react'
import { Button } from '../button'
import { Trash2 } from 'lucide-react'
import { removeReview } from '@/app/services/review.services'
import { useState } from 'react'
import { Spinner } from '../spinner'
import { toast } from '../toast'

export default function RemoveReview({userId,reviewId}:{userId:string,reviewId:string}) {
    const [isLoading, setisLoading] = useState(false);
    const {data} = useSession()

    async function deleteReview() {
        setisLoading(true)
        await removeReview(reviewId).then(()=>{setisLoading(false)}).then(()=>{toast.add({type:'success',description:'Your comment has been deleted'})})    
    }
   
    
    return data?.user.id===userId&&'hidden'&&(
        <Button
        variant="secondary"
        size="icon"
        className={`h-10 w-10 rounded-lg bg-gray-100 text-gray-700`}
        onClick={deleteReview}

    >
        {isLoading?<Spinner/>:<Trash2 className="h-4 w-4" />}
    </Button>
    )
}
