import { ISubCategoriesData } from "@/types/subCategories";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

export default function SubCategoriesCard({subCategorie}:{subCategorie:ISubCategoriesData}) {
  return <Link href={`/subCategories/${subCategorie._id}`} className="group">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 max-w-xs hover:shadow-md hover:scale-105 transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-main-primary-50/50 flex items-center justify-center mb-5 mx-auto">
            <FolderOpen className='text-main-primary-950' />
        </div>
        <h3 className="text-gray-900 font-bold text-lg text-center group-hover:text-main-primary-800 transition-colors">{subCategorie.name}</h3>
      </div>
      </Link>
}