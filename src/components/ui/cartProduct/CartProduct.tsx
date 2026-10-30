import { Check, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import DeleteProduct from '../deleteProduct/DeleteProduct'
import UpdateCount from '../updateCount/UpdateCount'

export default async function CartProduct({image,id,categorieTitle,brand,title,numOfItem,price,count}:{image:string,id:string,categorieTitle:string,brand:string,title:string,numOfItem:number,price:number,count:number}) {
  
  return   <div className="lg:col-span-2 my-8">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="flex gap-5">
                {/* Image */}
                <Link href={`/products/${id}`} className="flex flex-col items-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
                    < Image
                      src={image}
                      width={80}
                      height={80}
                      alt="Orca Leather Boots Anthracite"
                      className="h-24 w-20 object-cover"
                    />
                  </div>
                  {count>0?<span className="mt-3 inline-flex items-center gap-1 rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <Check size={14}/> In Stock
                  </span>:
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <X size={14}/> Out Of Stock
                  </span>}
                    <p className='pt-2 text-gray-500 text-sm'>{count}<span> Available</span></p>

                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <span className="rounded-md bg-green-50 px-2 py-1 text-green-700">
                        {categorieTitle}
                      </span>
                      <span>•</span>
                      <span>{brand}</span>
                    </div>
                    <p className="mt-3 text-lg font-bold text-green-600">
                      {price} EGP{" "}
                      <span className="text-xs font-normal text-gray-400">per unit</span>
                    </p>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5">
                      <UpdateCount content={'−'} className='px-2 text-gray-400' prodId={id} count={numOfItem - 1}/>
                      <span className="w-6 text-center font-semibold text-gray-900">{numOfItem}</span>
                      <UpdateCount content={'+'} className='flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white' prodId={id} count={numOfItem + 1}/>
                    </div>

                    {/* Total + delete */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Total</p>
                        <p className="text-xl font-bold text-gray-900">
                          {price*numOfItem} <span className="text-xs font-normal text-gray-400">EGP</span>
                        </p>
                      </div>
                        <DeleteProduct productId={id} design='trash'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
}
