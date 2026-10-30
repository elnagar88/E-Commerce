'use client'

import { updateQuantity } from "@/app/services/cart.services"
import { useState } from "react";

export default function UpdateCount({content,className,prodId,count}:{content:string,className:string,prodId:string,count:number}) {
    const [isLoading, setisLoading] = useState(false);
   async function updateCount(){
       setisLoading(true)
        const data = await updateQuantity(prodId,count)
        if(data.status=='success'){
            setisLoading(false)
        }else{
            setisLoading(false)
        }
    }
  return <button className={className} onClick={updateCount} disabled={isLoading}>{content}</button>
}
