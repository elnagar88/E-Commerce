
'use client'

import { addToCart } from '@/app/services/cart.services'
import { Plus, ShoppingCart } from 'lucide-react'
import { toast } from '../toast'
import { Spinner } from '../spinner'
import { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import { Button } from '../button'

type Props = {
  id: string
  className?: string
  design: 'circle' | 'rectangle'
}

export default function AddToCart({ id, className, design }: Props) {

  const [isLoading, setIsLoading] = useState(false)
  const { setnumOfCart } = useContext(CartContext)

  async function handleAddProduct() {
    try {
      setIsLoading(true)

      const data = await addToCart(id)

      if (data.status === 'success') {
        toast.add({
          type: 'success',
          description: data.message,
        })

        setnumOfCart(data.numOfCartItems)
      } else {
        toast.add({
          type: 'error',
          description: data.message,
        })
      }

    } catch (error) {
      toast.add({
        type: 'error',
        description: 'Something went wrong. Please try again.',
      })

    } finally {
      setIsLoading(false)
    }
  }

  if (design === 'circle') {
    return (
      <Button
        type="button"
        onClick={handleAddProduct}
        disabled={isLoading}
        aria-label="Add to cart"
        className={`flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-main-primary-600 text-white duration-300 hover:bg-main-primary-950 sm:size-9 ${className ?? ''}`}
      >
        {isLoading ? <Spinner /> : <Plus className="size-4 sm:size-5" />}
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleAddProduct}
      disabled={isLoading}
      className={`h-11 flex-1 bg-main-primary-500 text-lg font-exo text-white duration-200 hover:bg-main-primary-700 hover:text-white ${className ?? ''}`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart className="size-5" />
          Add to cart
        </div>
      )}
    </Button>
  )
}
