import { getLoggedUserCart } from '@/app/services/cart.services'
import { Truck } from 'lucide-react'
import Image from 'next/image'

export default async function PaymentDetails() {
    const cartProducts = await getLoggedUserCart()
    return <>
        {/* Items */}
        {cartProducts.data.products.map((product) => {
            return  <div key={product._id} className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white">
                        <Image
                            src={product.product.imageCover}
                            alt={product.product.title}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-800">
                            {product.product.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">{product.count} × {product.price} EGP</p>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{product.price * product.count} EGP</span>
                </div>
            </div>
        })}

        {/* Totals */}
        <div className="mt-6 border-t border-gray-100 pt-5">
            <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{cartProducts.data.totalCartPrice} EGP</span>
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-gray-100 pb-5">
                <span className="flex items-center gap-2 text-gray-600">
                    <Truck className="h-5 w-5 text-gray-400" />
                    Shipping
                </span>
                <span className="font-bold text-green-600">FREE</span>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-green-600">{cartProducts.data.totalCartPrice}</span>
                    <span className="text-sm text-gray-500">EGP</span>
                </span>
            </div>
        </div>
    </>
}
