
import {
  Package,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Truck
} from 'lucide-react'

import HeroSection from '@/components/ui/heroSection/HeroSection'
import PaymentAddress from '@/components/ui/paymentAddress/PaymentAddress'
import PaymentDetails from '@/components/ui/paymentDetails/PaymentDetails'



export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params


  return (
    <>
      <HeroSection
        path="Checkout"
        subtitle="Review your items and complete your purchase"
        title="Complete Your Order"
        Icon={ReceiptText}
        beforePath="Cart"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 p-4 lg:grid-cols-[1fr_360px]">
        {/* Left column */}
        <div className="space-y-6">
          <PaymentAddress cartId={id} />
        </div>

        {/* Right column */}
        <aside className="mx-auto w-full lg:sticky lg:top-0">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            {/* Header */}
            <div className="bg-linear-to-br from-green-600 to-green-700 px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6" />
                <h2 className="text-xl font-bold">Order Summary</h2>
              </div>
              <p className="mt-2 text-sm text-green-100">1 item</p>
            </div>

            <div className="p-6">
              <PaymentDetails />

              {/* Buttons */}
              <button
                type="submit"
                form='payment-form'
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-green-600 to-green-700 py-4 text-base font-bold text-white shadow-lg shadow-green-600/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Package className="h-5 w-5" />
                Cash Payment

              </button>
              {/* Trust badges */}
              <div className="mt-5 flex items-center justify-center border-t border-gray-100 pt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5 px-3">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Secure
                </span>
                <span className="flex items-center gap-1.5 border-x border-gray-200 px-3">
                  <Truck className="h-4 w-4 text-blue-500" />
                  Fast Delivery
                </span>
                <span className="flex items-center gap-1.5 px-3">
                  <Package className="h-4 w-4 text-orange-500" />
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}