'use client'
import { Check, Trash } from 'lucide-react'
import { deleteProductCart } from '@/app/services/cart.services'
import { toast } from '../toast'
import { useContext, useState } from 'react';
import { Spinner } from '../spinner';
import { CartContext } from '@/context/CartContext';
import { Button } from '../button';

export default function DeleteProduct({productId,design}: {productId: string,design:string}) {
    const [isLoading, setisLoading] = useState(false);
    const {setnumOfCart} = useContext(CartContext)
  
  async function handleDelete(productId:string) {
    setisLoading(true)
    const data = await deleteProductCart(productId)
    if(data.status=='success'){
      toast.add({ type: "success", description: data.message,})
      setisLoading(false)
    }
    else{
      toast.add({ type: "error", description: 'Failed to delete product',})
      setisLoading(false)
      }
      setnumOfCart(data.numOfCartItems)
    
  }
    if(design=='trash'){
    return <Button
          type="button"
          onClick={()=>{handleDelete(productId)}}
          disabled={isLoading}
          aria-label="Add to cart"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"        >
         {isLoading?<Spinner />:<Trash />}
        </Button>
  }
  else if(design=='rectangle'){
    return  <Button
                variant="outline"
                onClick={()=>{handleDelete(productId)}}
                disabled={isLoading}
                className="h-11 flex-1  bg-main-primary-500 text-white text-lg font-exo hover:bg-main-primary-700 hover:text-white duration-200"
              >
                {isLoading?<Spinner />: <div className='flex gap-2 items-center justify-center'><Check className="size-5.5" />Added to cart</div>}
              </Button>
  }


}