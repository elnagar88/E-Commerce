import Image from 'next/image'
import React from 'react'
import authLayout from '@/assets/auth.png'

export default function layout({children}:{children:React.ReactNode}) {
  return <div className='py-4'>
    <div className='grid grid-cols-1  lg:grid-cols-12 w-10/12 mx-auto gap-10 py-6'>
        <div className=' lg:col-span-5 hidden lg:block'>
            <div className=' shadow-2xl rounded-2xl overflow-hidden'><Image src={authLayout} alt='FreshCart'/></div>
            <h2 className='text-3xl text-center font-bold my-8'>FreshCart - Your One-Stop Shop for Fresh Products</h2>
        </div>
        <div className=' lg:col-span-7 w-full'>
            {children}
        </div>
        </div>
  </div>
  
}
