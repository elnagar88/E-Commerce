'use client'
import { getLoggedUserCart } from '@/app/services/cart.services';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type cartContext ={
  numOfCart:number,
  setnumOfCart:Dispatch<SetStateAction<number>>
}

export const CartContext  = createContext<cartContext>({numOfCart:0,setnumOfCart:()=>{}})

export default function CartProvider({children}:{children:ReactNode}) {
  const [numOfCart, setnumOfCart] = useState(0);

  useEffect(()=>{getLoggedUserCart().then(data=>setnumOfCart(data.numOfCartItems))}
  ,[])
  return (
    <CartContext.Provider value={{numOfCart,setnumOfCart}}>{children}</CartContext.Provider>
  )
}
