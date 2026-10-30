import { getLoggedUserCart } from "@/app/services/cart.services"
import { getUserWishlist } from "@/app/services/wishlist.services"
import AddToCart from "@/components/ui/addToCart/AddToCart"
import DeleteProduct from "@/components/ui/deleteProduct/DeleteProduct"
import DeleteWishlist from "@/components/ui/deleteWishlist/DeleteWishlist"
import EmptyProduct from "@/components/ui/emptyProduct/EmptyProduct"
import HeroSection from "@/components/ui/heroSection/HeroSection"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, Heart, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default async function page() {
  const data = await getUserWishlist()
  const cartProducts = await getLoggedUserCart()


  return <>
    <HeroSection path='Wishlist' subtitle={`You have ${data.data.length} item in your wishlist`} title='Wishlist' Icon={Heart} />
    {data.data.length > 0 ?
      <div className="py-8">
        <div className="w-10/12 mx-auto border rounded-xl">
          <Table className=" rounded-xl! overflow-hidden">
            <TableHeader className="bg-gray-100">
              <TableRow >
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((product) => {
                return <TableRow key={product._id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Link href={`/products/${product._id}`} className="flex h-28 w-28 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
                        < Image
                          src={product.imageCover}
                          width={80}
                          height={80}
                          alt="Orca Leather Boots Anthracite"
                          className="h-24 w-20 object-cover"
                        />
                      </Link>
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{product.title.split(' ').slice(0, 3).join(' ')}</p>
                        <p className="text-xs text-muted-foreground">
                          {product.category.name}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-exo">{product.price} <span className="text-main-primary-900 font-semibold">EGP</span></TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-main-primary-800 font-exo">
                      <Check size={14} /> In Stock
                    </span>
                  </TableCell>
                  <TableCell className="w-8 pe-5">
                    <div className="flex gap-5 justify-center items-center scale-90">
                      {cartProducts?.data?.products?.some((prod) => prod.product._id === product._id) ?
                        <DeleteProduct productId={product._id} design="rectangle" /> :
                        <AddToCart id={product._id} design="rectangle" />}

                      <DeleteWishlist productId={product._id} >
                        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-500">
                          <Trash className="size-5" />
                        </button>
                      </DeleteWishlist>
                    </div>
                  </TableCell>
                </TableRow>
              })}
            </TableBody>
          </Table>
        </div>
      </div> : <EmptyProduct />}

  </>
}
