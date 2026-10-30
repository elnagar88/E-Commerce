import { PackageX } from "lucide-react";
import Link from "next/link";


export default function EmptyProduct() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <PackageX size={40} className="text-gray-400" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          No Products Found
        </h2>

        <p className="text-gray-500 mb-6">
          No products match your current filters.
        </p>

        <Link href={'/shop'} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          View All Products
        </Link>
      </div>
    </div>
  );
}


