import {
  Check,
  ChevronRight,
  FileText,
  Heart,
  Home,
  Package,
  RotateCcw,
  ShieldCheck,
  Star,
  Truck
} from "lucide-react";

import { getLoggedUserCart } from "@/app/services/cart.services";
import { getProductDetails } from "@/app/services/products.services";
import { getUserWishlist } from "@/app/services/wishlist.services";
import AddReview from "@/components/ui/addReview/AddReview";
import AddToCart from "@/components/ui/addToCart/AddToCart";
import AddWishlist from "@/components/ui/addWishlist/AddWishlist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DeleteProduct from "@/components/ui/deleteProduct/DeleteProduct";
import DeleteWishlist from "@/components/ui/deleteWishlist/DeleteWishlist";
import ProductReviews from "@/components/ui/productReviews/ProductReviews";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";



export default async function page({params}:{params:Promise<{productdetails:string}>}) {
   const {productdetails} = await params
   const product = await getProductDetails(productdetails)
   const wishlistProducts= await getUserWishlist()
   const cartProducts = await getLoggedUserCart()

  return <div className="min-h-screen bg-white container mt-5">
        <div className="mb-6 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-slate-500">
          <Link href={'/'}>
            <div className="flex items-center gap-1 hover:text-main-primary-400 duration-100">
              <Home size={13} /> 
              <span>Home</span>
            </div>
          </Link>

          <ChevronRight size={13} />

          <Link href={'/shop'} className="hover:text-main-primary-400 duration-100">Products</Link>

          <ChevronRight size={13} />

          <span className="font-medium text-slate-900">
            {product.title}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Main Image */}
            <div className="relative flex h-105 items-center justify-center overflow-hidden rounded-lg border bg-slate-50 p-5 lg:col-span-5">
              <Carousel>
              <CarouselContent>
              {product.images.map((image) => (
                <CarouselItem key={image}>
                  <Image
                    src={image}
                    alt="Woman Shawl"
                    width={400}
                    height={400}
                    className="w-96 object-contain mx-auto"
                  />
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className='left-2' />
              <CarouselNext className='right-2' />
            </Carousel>
            </div>
            

            {/* Product Info */}
          <Card className="rounded-lg border p-5 shadow-none sm:p-6 lg:col-span-7">
            {/* Categories */}
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="rounded-full bg-green-50 px-3 py-1 text-green-600 hover:bg-green-50"
              >
                {product.category.name}
              </Badge>

              <Badge
                variant="secondary"
                className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 hover:bg-slate-100"
              >
                {product.brand.name}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex  items-center gap-x-1.5 gap-y-0.5">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, index) => {
                  const fillPercentage =
                    Math.min(Math.max(product.ratingsAverage - index, 0), 1) * 100

                  return (
                    <div key={index} className="relative size-3.5 sm:size-4.5">
                      <Star className="absolute size-full text-gray-300" />
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${fillPercentage}%` }}
                      >
                        <Star className="size-3.5 fill-yellow-400 text-yellow-400 sm:size-4.5" />
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="flex gap-0.5 whitespace-nowrap text-[11px] text-gray-500 sm:text-xs">
                {product.ratingsAverage} <span>({product.ratingsQuantity})</span>
              </p>
            </div>

            {/* Price */}
            {product.priceAfterDiscount?
            <div className="mt-3 text-xl text-slate-400 line-through">
              {product.price} EGP
            </div>:''}
            <div className="text-3xl font-bold text-slate-900">
              {product.priceAfterDiscount?product.priceAfterDiscount:product.price} EGP
            </div>

            {/* Stock */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {product.quantity>0?'In Stock' : ''}
            </div>

            <Separator className="my-5" />

            {/* Description */}
            <p className="text-sm leading-6 text-slate-600">
             {product.description}
            </p>

              {wishlistProducts?.data?.some((prod) => prod._id === product._id)?           
                <DeleteWishlist productId={product._id}>
                          <div className="mt-3 flex gap-2">
                        <Button
                          variant="outline"
                          className="h-11 flex-1 text-lg font-exo font-normal border-red-500 bg-red-100 hover:bg-red-100"
                        >
                          <Heart className="size-5 fill-red-500 stroke-0"/>
                          In Wishlist
                        </Button>
                      </div>
                </DeleteWishlist>:           
                <AddWishlist productId={product._id}>
                          <div className="mt-3 flex gap-2">
                        <Button
                          variant="outline"
                          className="h-11 flex-1 text-lg font-exo font-normal"
                        >
                          <Heart className="size-5" />
                          Add to Wishlist
                        </Button>
                      </div>
                </AddWishlist>}

            <div className=" flex gap-2 my-2">
              {cartProducts?.data?.products?.some((prod)=>prod.product._id===product._id)?
              <DeleteProduct productId={product._id} design="rectangle"/>:
              <AddToCart id={product._id} design="rectangle"/>}
                
            </div>


            <Separator className="" />

            <div className='md:flex justify-between items-center'>
            <div className="flex gap-2 items-center">
              <div className='p-2 bg-main-primary-50 my-2 text-main-primary-900 rounded-2xl'><Truck /></div>
              <p>Free Delivery <br /> <span className="text-gray-400">Orders over $50</span></p>
            </div>
            <div className="flex gap-2 items-center">
              <div className='p-2 bg-main-primary-50 my-2 text-main-primary-900 rounded-2xl'><RotateCcw /></div>
              <p>30 Days Return<br /> <span className="text-gray-400">Money back</span></p>
            </div>
            <div className="flex gap-2 items-center">
              <div className='p-2 bg-main-primary-50 my-2 text-main-primary-900 rounded-2xl'><ShieldCheck /></div>
              <p>Secure Payment<br /> <span className="text-gray-400">100% Protected</span></p>
            </div>
          </div>
          </Card>
          </div>
            <div className="mt-8">

          <Tabs defaultValue="details" className='my-8 grid'>

            <Card className="overflow-hidden rounded-lg border shadow-none">

              {/* Tabs Header */}
              <TabsList className="h-auto min-w-full justify-start rounded-none border-b bg-white p-0">

                <TabsTrigger
                  value="details"
                  className="rounded-none px-5 py-4 text-xs data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600 sm:text-sm"
                >
                  <FileText size={15} />
                  Product Details
                </TabsTrigger>

                <TabsTrigger
                  value="reviews"
                  className="rounded-none px-5 py-4 text-xs sm:text-sm"
                >
                  <Star size={15} />
                  Reviews ({product.reviews.length})
                </TabsTrigger>

                <TabsTrigger
                  value="shipping"
                  className="rounded-none px-5 py-4 text-xs sm:text-sm"
                >
                  <Package size={15} />
                  Shipping & Returns
                </TabsTrigger>

              </TabsList>

              {/* Details */}
              <TabsContent
                value="details"
                className="m-0 p-5 sm:p-6"
              >
                <h2 className="text-base font-bold text-slate-900">
                  About this Product
                </h2>

                <p className="mt-3 text-sm text-slate-600">
                  {product.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

                  {/* Product Information */}
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h3 className="mb-4 text-sm font-semibold text-slate-900">
                      Product Information
                    </h3>
                    <div className="text-xs flex justify-between">
                        <div className="space-y-3 text-gray-500">
                          <p>Category</p>
                          <p>Subcategory</p>
                          <p>Brand</p>
                          <p>Items Sold</p>
                          </div>
                        <div className="space-y-3 text-end">
                          <p>{product.category.name}</p>
                          <p>{product.subcategory[0].name}</p>
                          <p>{product.brand.name}</p>
                          <p>+{product.sold} Sold</p>
                        </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="rounded-lg bg-slate-50 p-4">
                    <h3 className="mb-4 text-sm font-semibold text-slate-900">
                      Key Features
                    </h3>
                        <div className="space-y-3 text-xs text-gray-500">
                          <div className="flex gap-1 items-center"><Check size={18} className="text-main-primary-800"/>Premium Quality Product</div>
                          <div className="flex gap-1 items-center"><Check size={18} className="text-main-primary-800"/>100% Authentic Guarantee</div>
                          <div className="flex gap-1 items-center"><Check size={18} className="text-main-primary-800"/>Fast & Secure Packaging</div>
                          <div className="flex gap-1 items-center"><Check size={18} className="text-main-primary-800"/>Quality Tested</div>
                        </div>
                  </div>

                </div>
              </TabsContent>

              {/* Reviews */}
              <TabsContent
                value="reviews"
                className="m-0 p-5 sm:p-6"
              >
                <h2 className="font-semibold">
                  Customer Reviews
                </h2>
                  <AddReview productId={product._id} />
                  <ProductReviews productId={product._id}/>
              </TabsContent>

              {/* Shipping */}
              <TabsContent
                value="shipping"
                className="m-0 p-5 sm:p-6"
              >
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Shipping */}
        <div className="rounded-lg bg-linear-to-br from-green-50 to-green-100/60 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-green-600 text-white">
              <Truck size={26} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Shipping Information</h3>
          </div>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Free shipping on orders over $50
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Standard delivery: 3-5 business days
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Express delivery available (1-2 business days)
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Track your order in real-time
            </li>
          </ul>
        </div>

        {/* Returns */}
        <div className="rounded-lg bg-linear-to-br from-green-50 to-green-100/60 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-green-600 text-white">
              <RotateCcw size={26} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Returns & Refunds</h3>
          </div>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              30-day hassle-free returns
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Full refund or exchange available
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Free return shipping on defective items
            </li>
            <li className="flex items-center gap-3">
              <Check size={18} className="text-green-600" />
              Easy online return process
            </li>
          </ul>
        </div>
      </div>

      {/* Buyer protection */}
      <div className="flex items-center gap-5 rounded-lg bg-slate-50 p-6">
        <div className="flex h-17.5 w-17.5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
          <ShieldCheck size={30} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Buyer Protection Guarantee</h3>
          <p className="mt-1 text-slate-600">
            Get a full refund if your order doesn't arrive or isn't as described. We ensure your
            shopping experience is safe and secure.
          </p>
        </div>
      </div>
    </div>
              </TabsContent>

            </Card>
          </Tabs>
        </div>
  </div>
}
