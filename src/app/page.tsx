import CategoriesCard from "@/components/ui/categoriesCard/CategoriesCard";
import FeaturesSection from "@/components/ui/featuresSection/FeaturesSection";
import HomeCarousel from '@/components/ui/homeCarousel/HomeCarousel';
import ProductCard from '@/components/ui/productCard/ProductCard';
import { getAllProducts } from "./services/products.services";

export default async function Home() {
  const productsList = await getAllProducts('30')
  
  return <>
      <div className="bg-gray-100 mb-10">
        <HomeCarousel/>
        <FeaturesSection/>
      </div>
      <CategoriesCard/>
      <div className="flex items-center gap-3 container">
        <span className="h-6 w-1.5 rounded-full bg-green-600"></span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Featured <span className="text-green-600">Products</span>
        </h2>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-8">
      {productsList.data.map((product)=>{
        return <ProductCard key={product._id} product={product}/>
      })}
  </div> 
  </>
}
