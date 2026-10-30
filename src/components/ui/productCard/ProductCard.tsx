import { getUserWishlist } from "@/app/services/wishlist.services"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IProduct } from "@/types/products.type"
import { Eye, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'
import AddToCart from "../addToCart/AddToCart"
import AddWishlist from "../addWishlist/AddWishlist"
import DeleteWishlist from "../deleteWishlist/DeleteWishlist"


export default async function ProductCard({ product }: { product: IProduct }) {
  const discountPercent = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : 0
    const wishlistProducts= await getUserWishlist()

  return (
    <Card className="group flex h-full w-full min-w-0 flex-col gap-2 overflow-hidden pb-2.5 pt-0 shadow-md transition-shadow hover:shadow-xl sm:gap-2.5 sm:pb-3">
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-white sm:aspect-4/3">
        <Image
          src={product.imageCover}
          alt={product.title}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/5" />

        {/* Action buttons */}
        <div className="absolute right-1.5 top-1.5 flex flex-col gap-1.5 sm:right-2 sm:top-2">
          {wishlistProducts?.data?.some((prod) => prod._id === product._id)?           
            <button
            type="button"
            aria-label="Add to wishlist"
            className="group/heart flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm sm:size-9"
          >
           <DeleteWishlist productId={product._id}>
          <Heart
            className={`size-4 duration-300 
              group-hover/heart:fill-red-500 
              group-hover/heart:stroke-0 
              ${wishlistProducts?.data?.some((prod) => prod._id === product._id) ? 'fill-red-500 stroke-0' : ''}
              sm:size-5`}
          />
            </DeleteWishlist>         
          </button>:  
            <button
            type="button"
            aria-label="Add to wishlist"
            className="group/heart flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm sm:size-9"
          >
           <AddWishlist productId={product._id}>
          <Heart
            className={`size-4 duration-300 
              group-hover/heart:fill-red-500 
              group-hover/heart:stroke-0 
              ${wishlistProducts?.data?.some((prod) => prod._id === product._id) ? 'fill-red-500 stroke-0' : ''}
              sm:size-5`}
          />
            </AddWishlist>
          </button>}
          <button
            type="button"
            aria-label="Quick view"
            className="group/eye flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm sm:size-9"
          >
                 <Link href={`/products/${product._id}`} className="py-2"><Eye className="size-4 duration-300 group-hover/eye:text-main-primary-600 sm:size-5" /></Link>
          </button>
        </div>

        {/* Discount badge */}
        {discountPercent > 0 && (
          <div className="absolute left-1.5 top-1.5 rounded bg-main-primary-950 px-1.5 py-0.5 text-[10px] font-medium text-white sm:left-2 sm:top-2 sm:text-xs">
            -{discountPercent}%
          </div>
        )}
      </div>

      {/* Header */}
      <Link href={`/products/${product._id}`} className="py-2">
        <CardHeader className="min-w-0 gap-1 px-2.5 sm:px-4">
        {/* Category + Brand */}
        <div className="flex min-w-0 items-center justify-between gap-2">
          <CardDescription className="min-w-0 flex-1 truncate text-[11px] sm:text-xs">
            {product.category.name}
          </CardDescription>

          <Badge
            title={product.brand.name}
            className="max-w-[45%] shrink-0 truncate bg-main-primary-600 px-1.5 py-0 text-[10px] text-white sm:px-2 sm:py-0.5 sm:text-xs"
          >
            {product.brand.name}
          </Badge>
        </div>

        <CardTitle className="line-clamp-1 text-sm font-semibold leading-5 sm:text-base">
          {product.title.split(" ", 2).join(" ")}
        </CardTitle>

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => {
              const fillPercentage =
                Math.min(Math.max(product.ratingsAverage - index, 0), 1) * 100

              return (
                <div key={index} className="relative size-3 sm:size-4">
                  <Star className="absolute size-full text-gray-300" />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${fillPercentage}%` }}
                  >
                    <Star className="size-3 fill-yellow-400 text-yellow-400 sm:size-4" />
                  </div>
                </div>
              )
            })}
          </div>
          <p className="flex gap-0.5 whitespace-nowrap text-[11px] text-gray-500 sm:text-xs">
            {product.ratingsAverage} <span>({product.ratingsQuantity})</span>
          </p>
        </div>
      </CardHeader>
      </Link>

      {/* Footer */}
      <CardFooter className="mt-auto flex items-end justify-between gap-2 px-2.5 sm:px-4">
        {product.priceAfterDiscount ? (
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[10px] text-muted-foreground line-through sm:text-xs">
              {product.price} EGP
            </span>
            <span className="truncate text-sm font-bold text-main-primary-950 sm:text-base">
              {product.priceAfterDiscount} EGP
            </span>
          </div>
        ) : (
          <span className="min-w-0 truncate text-sm font-bold text-main-primary-950 sm:text-base">
            {product.price} EGP
          </span>
        )}

        <AddToCart id={product._id} design="circle"/>
      </CardFooter>
    </Card>
  )
}