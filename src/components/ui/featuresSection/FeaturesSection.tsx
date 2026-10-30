import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <Truck className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900">Free Shipping</h4>
            <p className="text-xs sm:text-sm text-gray-500">On orders over 500 EGP</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-green-100">
            <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900">Secure Payment</h4>
            <p className="text-xs sm:text-sm text-gray-500">100% secure transactions</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-orange-100">
            <RotateCcw className="h-6 w-6 sm:h-7 sm:w-7 text-orange-500" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900">Easy Returns</h4>
            <p className="text-xs sm:text-sm text-gray-500">14-day return policy</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-purple-100">
            <Headphones className="h-6 w-6 sm:h-7 sm:w-7 text-purple-500" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900">24/7 Support</h4>
            <p className="text-xs sm:text-sm text-gray-500">Dedicated support team</p>
          </div>
        </div>
      </div>
    </div>
  )
}