'use client'
import { addToWishlist } from '@/app/services/wishlist.services'
import React, { useState } from 'react'
import { toast } from '../toast'
import { Spinner } from '../spinner';

export default function AddWishlist({children,productId}:{children:React.ReactNode,productId:string}) {
  const [isLoading, setisLoading] = useState(false);
    async function handleAddToWishlist(){
      setisLoading(true)
      const data = await addToWishlist(productId)        
      if(data.status=='success'){
        toast.add({type:'success',description:data.message})
      }else{
        toast.add({type:'error',description:data.message})
        setisLoading(false)
        }
    }
  return isLoading?<Spinner className='w-full flex justify-center'/>:<div onClick={handleAddToWishlist}>{children}</div>
    
  
}
