import { getAllProducts } from '@/app/services/products.services'
import HeroSection from '@/components/ui/heroSection/HeroSection'
import ProdPagination from '@/components/ui/prodPagination/ProdPagination'
import ProductCard from '@/components/ui/productCard/ProductCard'
import ProductsFilter from '@/components/ui/productsFilter/ProductsFilter'
import { PackageOpen } from 'lucide-react'

export default async function Shop(props: {
  searchParams?: Promise<{
    page?: string
    sort?: string
    minPrice?: string
    maxPrice?: string
  }>
}) {
  const sp = await props.searchParams

  const productsList = await getAllProducts(
    '20',
    sp?.page,
    sp?.sort,
    sp?.minPrice,
    sp?.maxPrice
  )

  return <>
    <HeroSection title='All Products' subtitle='Explore our complete product collection' path='All Products' Icon={PackageOpen} />
    <div className="flex items-center justify-between container">
      <div className="flex items-center gap-3 py-8">
        <span className="h-6 w-1.5 rounded-full bg-green-600"></span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Featured <span className="text-green-600">Products</span>
        </h2>
      </div>
      <ProductsFilter />
    </div>
    <div className='container pb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
      {productsList.data.map((product) => {
        return <ProductCard key={product._id} product={product} />
      })}
    </div>
    <ProdPagination productsList={productsList} />
  </>
}