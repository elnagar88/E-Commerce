import { getProductsOfBrand } from "@/app/services/brands.services";
import EmptyProduct from "@/components/ui/emptyProduct/EmptyProduct";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import ProductCard from "@/components/ui/productCard/ProductCard";
import { IProduct } from "@/types/products.type";

export default async function specificBrand({params}:{params:Promise<{specficBrand:string}>}) {
    const {specficBrand} = await params
    const products:IProduct[] = await getProductsOfBrand(specficBrand)    
    
  return <>
    {products?.length>0? <>
    <HeroSection title={products[0].brand.name} photo={products[0].brand.image} path={products[0].brand.name} subtitle={`Shop ${products[0].brand.name} Products`} beforePath="brands"/>
    <div className="container p-5">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-main-primary-600"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
             <span>{products[0]?.brand.name}</span>
          </h2>
        </div>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 container mb-8 lg:grid-cols-4 gap-4">
        {products?.map((product)=>{return <ProductCard key={product._id} product={product}/>})}
    </div></>
    :<EmptyProduct/>}
  </>
}
