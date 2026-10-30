import { IBrandsData } from '@/types/brands.type'
import Image from 'next/image'
import Link from 'next/link'

export default function BrandCard({ brand }: { brand: IBrandsData }) {
  return (
    <Link
      href={`/brands/${brand._id}`}
      className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-white text-center shadow-sm hover:shadow-xl transition-all duration-200 group block"
    >
      <div className=" rounded-xl mb-3">
        <Image
          src={brand.image}
          alt="Brand Logo"
          width={120}
          height={120}
          className="max-w-full mx-auto"
        />
      </div>

      <div className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-main-primary-500 transition-colors duration-300">
        {brand.name}
      </div>
    </Link>
  )
}