import { getAllBrands } from '@/app/services/brands.services'
import BrandCard from '@/components/ui/brandCard/BrandCard'
import HeroSection from '@/components/ui/heroSection/HeroSection'
import { Tags } from 'lucide-react'

export default async function Brands() {
  const brandList = await getAllBrands()  
  return <>
    <HeroSection title='Brands' subtitle='Shop from your favorite brands' path='Brands' Icon={Tags}/>
          <div className="flex items-center justify-between container py-8">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-green-600"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            New <span className="text-green-600">Brands</span>
          </h2>
        </div>
      </div>
    <div className="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-8">
      {brandList.map((brand)=>{
        return <BrandCard key={brand._id} brand={brand}/>
      })}
    </div>
  </>
}
