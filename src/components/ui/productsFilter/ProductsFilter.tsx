'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SlidersHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const SORT_OPTIONS = [
  { label: 'Newest', value: '' },
  { label: 'Price: Low to High', value: 'price' },
  { label: 'Price: High to Low', value: '-price' },
  { label: 'Top Rated', value: '-ratingsAverage' },
  { label: 'Best Selling', value: '-sold' },
]

export default function ProductsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState(searchParams.get('sort') ?? '')
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') ?? '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') ?? '')

  const activeCount =
    (searchParams.get('sort') ? 1 : 0) +
    (searchParams.get('minPrice') || searchParams.get('maxPrice') ? 1 : 0)

  function pushParams(values: { sort: string; minPrice: string; maxPrice: string }) {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page') // رجّع لأول صفحة
    params.delete('sort')
    params.delete('minPrice')
    params.delete('maxPrice')

    if (values.sort) params.set('sort', values.sort)
    if (values.minPrice) params.set('minPrice', values.minPrice)
    if (values.maxPrice) params.set('maxPrice', values.maxPrice)

    router.push(`?${params.toString()}`)
    setOpen(false)
  }

  function resetFilters() {
    setSort('')
    setMinPrice('')
    setMaxPrice('')
    pushParams({ sort: '', minPrice: '', maxPrice: '' })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger >
        <Button
          variant="outline"
          className="h-11 gap-2 rounded-full border-green-600 px-5 text-green-700 hover:bg-green-50 hover:text-green-700"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-xs font-bold text-white">
              {activeCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2">
            <span className="h-5 w-1.5 rounded-full bg-green-600" />
            Filter Products
          </SheetTitle>
          <SheetDescription>Choose how you want to browse products</SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-8 overflow-y-auto p-4">
          <section>
            <h3 className="mb-3 font-bold text-gray-900">Sort by</h3>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSort(opt.value)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm transition',
                    sort === opt.value
                      ? 'border-green-600 bg-green-600 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-green-600'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 font-bold text-gray-900">Price range</h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={0}
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-300 px-3 outline-none focus:border-green-600"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                min={0}
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-300 px-3 outline-none focus:border-green-600"
              />
            </div>
          </section>
        </div>

        <SheetFooter className="flex-row gap-3 border-t p-4">
          <Button variant="outline" className="h-11 flex-1" onClick={resetFilters}>
            Reset
          </Button>
          <Button
            className="h-11 flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => pushParams({ sort, minPrice, maxPrice })}
          >
            Apply
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}