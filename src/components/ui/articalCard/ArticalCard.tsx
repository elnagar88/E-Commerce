import { IArticalContent } from "@/types/artical.types";
import Link from "next/link";

export default function ArticleCard({numArtical,title,Icon,content}:{numArtical:string,title:string,Icon:React.ElementType,content:IArticalContent[]}) {

  return (
    <div className=" min-w-full mx-auto rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-2xl duration-200">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-bold tracking-wide text-green-600">ARTICLE {numArtical}</p>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      </div>

      <ul className="mt-5 space-y-4">
        {content?.map((line,index)=>{
            return <li key={index} className="flex items-start gap-3">
            {line.num?<span className="mt-0.5 shrink-0 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-600">{line.num}</span>:''}
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">{line.subtitle}</span>{line.description} <Link href={`mailto:${line?.email}`} className="text-main-primary-700 font-bold">{line.email}</Link>
          </p>
        </li>
        })}
{/* 
        <li className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-600">
            1.2
          </span>
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Payment Data:</span> Credit card information processed securely through our payment providers.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-600">
            1.3
          </span>
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Technical Data:</span> IP address, browser type, device information, and access times.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-600">
            1.4
          </span>
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Usage Data:</span> Pages viewed, products browsed, and actions taken within our platform.
          </p>
        </li> */}
      </ul>
    </div>
  );
}