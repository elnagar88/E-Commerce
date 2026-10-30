'use client'
import { removeProductwishlist } from '@/app/services/wishlist.services'
import React, { useState } from 'react'
import { toast } from '../toast'
import { Spinner } from '../spinner';

export default function DeleteWishlist({children,productId}:{children:React.ReactNode,productId:string}) {
    const [isLoading, setisLoading] = useState(false);
    async function deleteItem() {              
        setisLoading(true)  
        const data =  await removeProductwishlist(productId)
        if(data.status=='success'){
            toast.add({type:'success',description:data.message})
        }else{
            toast.add({type:'error',description:data.message})
        }
    }
    return isLoading?<Spinner className='w-full flex justify-center'/>:<div onClick={deleteItem}>{children}</div>
  
}
