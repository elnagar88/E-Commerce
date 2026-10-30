import BackButton from '@/components/ui/backButton/BackButton'
import { Apple, Carrot, House, Leaf, PlantPot } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return <div className="relative min-h-screen w-full overflow-hidden bg-[#eef4f1] flex items-center justify-center px-5 py-16">
    <span className="absolute top-10 left-24 text-3xl opacity-30 select-none"><Apple fill='currentColor' className='text-main-primary-500 animate-bounce animation-duration-[5s] ' /></span>
    <span className="absolute top-96 left-72 text-lg opacity-30 select-none"><Apple fill='currentColor' className='text-main-primary-200 animate-bounce animation-duration-[5s]' /></span>
    <span className="absolute bottom-56 left-36 text-2xl opacity-30 select-none -rotate-12"><Leaf fill='currentColor' className='text-main-primary-600 animate-bounce animation-duration-[5s]'/></span>
    <span className="absolute bottom-32 right-32 text-3xl opacity-30 select-none"><PlantPot fill='currentColor' className='text-main-primary-400 animate-bounce animation-duration-[5s]' /></span>
    <span className="absolute top-28 right-44 text-xl opacity-30 select-none rotate-12"><Carrot fill='currentColor' className='text-main-primary-500 animate-bounce animation-duration-[5s]' /></span>
    <span className="absolute top-72 right-24 text-lg opacity-30 select-none rotate-6"><Carrot fill='currentColor' className='text-main-primary-200 animate-bounce animation-duration-[5s]' /></span>

    <div className="relative z-10 w-full max-w-lg text-center">
      <div className="relative mx-auto mb-6 flex h-47.5 w-50 items-center justify-center rounded-3xl bg-white shadow-lg">

<svg viewBox="0 0 413 382" width="75%" height="100%">
  <path fill="#6ee499e9" fillRule="evenodd" d="
    M 270 271 L 266 272 L 262 274 L 259 276 L 253 282 L 250 288 L 249 292 L 249 303 L 250 307 L 253 313 L 259 319 L 262 321 L 266 323 L 270 324 L 281 324 L 285 323 L 291 320 L 297 314 L 299 311 L 301 307 L 302 303 L 302 292 L 301 288 L 299 284 L 297 281 L 291 275 L 285 272 L 281 271 Z 
    M 144 271 L 140 272 L 136 274 L 133 276 L 127 282 L 124 288 L 123 292 L 123 303 L 124 307 L 127 313 L 133 319 L 136 321 L 140 323 L 144 324 L 155 324 L 159 323 L 165 320 L 171 314 L 173 311 L 175 307 L 176 303 L 176 292 L 175 288 L 173 284 L 171 281 L 165 275 L 159 272 L 155 271 Z 
    M 35 33 L 33 45 L 38 52 L 72 54 L 76 58 L 105 219 L 111 234 L 120 244 L 138 252 L 293 252 L 300 247 L 302 235 L 293 226 L 140 225 L 131 214 L 130 198 L 306 198 L 319 193 L 328 185 L 335 170 L 353 72 L 346 58 L 339 55 L 104 55 L 96 39 L 78 28 L 42 28 Z
  " />
</svg>

   <div className="absolute -top-4 -right-4 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-green-500 text-lg font-extrabold text-white shadow-[0_8px_18px_rgba(34,197,94,0.4)] border-8 border-white">
          404
        </div>
      </div>

      <div className="mb-5 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-main-primary-300" />
        <div className=" w-8 h-4 border-b-[3px] border-main-primary-300 rounded-b-full"></div>    
        <span className="h-2 w-2 rounded-full bg-main-primary-300" />
      </div>

      <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
        Oops! Nothing Here
      </h1>
      <p className="mb-7 text-slate-500 leading-relaxed">
        Looks like this page went out of stock! Don't worry,
        <br className="hidden sm:block" />
        there's plenty more fresh content to explore.
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <Link href={'/'}
          className="flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(34,197,94,0.35)]"
        >
          <span><House size={18}/></span> Go to Homepage
        </Link>
          <BackButton/>
      </div>

      <div className="rounded-[20px] bg-white px-6 py-6 shadow-md">
        <div className="mb-4 text-xs font-bold tracking-widest text-slate-400">
          POPULAR DESTINATIONS
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link href={'/shop'}
            className="rounded-xl bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-200 duration-200"
          >
            All Products
          </Link>
          <Link href={'/categories'}
            className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 duration-200"
          >
            Categories
          </Link>
          <Link href={'/support'}
            className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>


}