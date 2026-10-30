import { getAllCategories } from "@/app/services/categories.services"
import Image from "next/image"
import Link from "next/link"

export default async function CategoriesCard() {
    const categories = await getAllCategories()    
  return (
    <div className="w-full container mb-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-green-600"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Shop By <span className="text-green-600">Category</span>
          </h2>
        </div>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((categorie)=>{
        return <Link key={categorie._id} href={`/categories/${categorie._id}`} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200  hover:scale-105 hover:shadow-xl duration-300">
        <div className="h-8/12 rounded-2xl overflow-hidden bg-gray-100">
            <Image
            src={categorie.image}
            alt={categorie.name}
            width={150}
            height={150}
            className="h-full w-full object-center"
            />
        </div>
        <p className="text-sm sm:text-base font-medium text-gray-800">{categorie.name}</p>
        </Link>
        })}
        </div>
    </div>
  )
}