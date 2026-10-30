import { getLoggedUserCart } from "@/app/services/cart.services";
import CartProduct from "@/components/ui/cartProduct/CartProduct";
import ClearCart from "@/components/ui/clearCart/ClearCart";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import { ArrowLeft, Lock, Shield, ShoppingBag, ShoppingBasket, ShoppingCart, Truck } from "lucide-react";
import Link from "next/link";

export  default async function page() {

  const data =  await getLoggedUserCart()  
    
  return <>
      <HeroSection path='Cart' subtitle={`You have ${data?.data?.products.length} item in your cart`} title='Shopping Cart' Icon={ShoppingCart}/>
      {data?.data?.products?.length>0?  
        <div className="min-h-screen bg-gray-50 px-6 py-6 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left: Cart items */}
            <div className="space-y-4 lg:col-span-2">
              {data?.data?.products?.map((product) => (
                <CartProduct key={product._id} image={product.product.imageCover} id={product.product.id} categorieTitle={product.product.category.name} brand={product.product.brand.name} title={product.product.title} numOfItem={product.count} price={product.price} count={product.product.quantity}/>
              ))}
              {/* Bottom links */}
                <ClearCart/>
            </div>
          {/* Right: Order summary */}
          <div className="h-fit overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-5 text-white">
              <h3 className="flex items-center gap-2 text-lg font-bold"><span><ShoppingBasket/></span> Order Summary</h3>
              <p className="mt-1 text-sm text-green-50">{data.data.products.length} item in your cart</p>
            </div>

            <div className="p-6">
              {/* Free shipping box */}
              <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Truck/>
                </div>
                <div>
                  <p className="font-semibold text-green-700">Free Shipping!</p>
                  <p className="text-sm text-green-600">You qualify for free delivery</p>
                </div>
              </div>

              {/* Prices */}
              <div className="mt-5 space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900">{data.data.totalCartPrice} EGP</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-4">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-gray-900">
                  {data.data.totalCartPrice} <span className="text-sm font-normal text-gray-400">EGP</span>
                </span>
              </div>

              {/* Checkout */}
              <Link href={`/checkout/${data.cartId}`} className="flex justify-center items-center gap-3 mt-5 w-full rounded-xl bg-linear-to-r from-green-600 to-green-700 py-4 font-semibold text-white shadow-lg shadow-green-200">
                <span><Lock/></span> Secure Checkout
              </Link>

              {/* Badges */}
              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center justify-center gap-1"><span><Shield size={17}/></span> Secure Payment</div>
                <span className="h-4 w-px bg-gray-200" />
                <div className="flex items-center justify-center gap-1"><span><Truck size={17}/></span> Fast Delivery</div>
              </div>

              <div className="mt-8 text-center text-sm">
                <Link href="/shop" className="text-green-600 hover:text-main-primary-900 duration-200 flex items-center justify-center gap-1">
                  <span><ArrowLeft size={16}/></span> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>:
    <div className="flex py-13 flex-col items-center justify-center bg-white px-4 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-100">
          <ShoppingBag size={60} className="text-gray-600" />
      </div>
 
      <h2 className="mt-12 text-2xl font-bold text-gray-900 font-exo">Your cart is empty</h2>
 
      <p className="mt-4 max-w-sm text-base leading-relaxed text-gray-500">
        Looks like you haven't added anything to your cart yet. Start exploring our products!
      </p>
 
      <Link href={'/shop'}
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-gray-300"
      >
        Start Shopping <ShoppingCart />
      </Link>
    </div>}
  </>
}

