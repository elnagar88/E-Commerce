'use client'
import { clearCart } from '@/app/services/cart.services'
import { ArrowLeft, Trash } from 'lucide-react'
import Link from 'next/link'
import { toast } from '../toast'
import { useContext, useState } from 'react'
import { Spinner } from '../spinner'
import { CartContext } from '@/context/CartContext'

export default function ClearCart() {
      const [isLoading, setisLoading] = useState(false);
      const {setnumOfCart} = useContext(CartContext)
    
    async function clearAll() {
        setisLoading(true)
        const data = await clearCart()
        if(data.status=='success'){
            toast.add({type:'success',description:data.message})
            setisLoading(false)
        }
        else{
            toast.add({type:'error',description:data.message})
            setisLoading(false)
        }
        setnumOfCart(data.numOfCartItems)
    }
  return <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm">
            <Link href="/shop" className="text-green-600 hover:text-main-primary-900 duration-200 flex items-center justify-center gap-1">
                <span><ArrowLeft size={16}/></span> Continue Shopping
            </Link>
                <button onClick={clearAll} disabled={isLoading} className="text-gray-400 hover:text-gray-600 flex items-center gap-1 duration-200">{isLoading?<Spinner/>:<p className='flex gap-1'><span><Trash size={18}/></span>Clear all items</p>}</button>
        </div>
  
}
