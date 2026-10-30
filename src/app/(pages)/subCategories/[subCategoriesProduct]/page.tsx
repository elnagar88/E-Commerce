import { getProductsOfSubCategories } from '@/app/services/subCategories.services';
import EmptyProduct from '@/components/ui/emptyProduct/EmptyProduct';
import HeroSection from '@/components/ui/heroSection/HeroSection';
import ProductCard from '@/components/ui/productCard/ProductCard';
import { Layers } from 'lucide-react';

export default async function page({params}:{params:Promise<{subCategoriesProduct:string}>}) {
    const {subCategoriesProduct} = await params
    const products = await getProductsOfSubCategories(subCategoriesProduct)
    
  return <>
  {products.length>0?
  <>
    <HeroSection path={products[0].subcategory[0].name} subtitle={`Browse ${products[0].subcategory[0].name} products`} title={products[0].subcategory[0].name} Icon={Layers} beforePath='categories' />
    <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
      {products.map((product)=>{
        return <ProductCard product={product} key={product._id}/>
      })}
    </div>
  </>
  :<EmptyProduct/>}
  </>
}
