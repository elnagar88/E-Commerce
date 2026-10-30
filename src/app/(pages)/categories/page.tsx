import CategoriesCard from '@/components/ui/categoriesCard/CategoriesCard'
import HeroSection from '@/components/ui/heroSection/HeroSection'
import { Layers } from 'lucide-react'

export default function page() {
  return <>
    <HeroSection title='All Categories' subtitle='Browse our wide range of product categories' path='Categories' Icon={Layers}/>
    <div className="py-8">
      <CategoriesCard/>  
    </div>
  </>
}
