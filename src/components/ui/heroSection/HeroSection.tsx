import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

export default function HeroSection({title,subtitle,path,Icon,photo,beforePath}:{title:string,subtitle:string,path:string,Icon?:React.ElementType,photo?:string,beforePath?:string}) {
  return (
    <div className="w-full bg-linear-to-r from-green-700 via-green-600 to-green-400 px-4 sm:px-6 md:px-10 py-8 sm:py-10">
        <div className="mb-6 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-white">
          <Link href={'/'}>
            <div className="flex  gap-1 hover:text-main-primary-100 duration-100">
              <Home size={13} /> 
              <span>Home</span>
            </div>
          </Link>
          {beforePath&& <Link href={`/${beforePath}`}>
            <div className="flex items-center gap-1 hover:text-main-primary-100 duration-100">
          <ChevronRight size={13} />
              <span>{beforePath}</span>
            </div>
          </Link>}
          <ChevronRight size={13} />
          <span className="font-medium">
            {path}
          </span>
        </div>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20">
        {Icon? <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" /> : ''}
        {photo? <img src={photo} alt=""  className="w-10/12 rounded-md"/> : ''}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-white/90 mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}