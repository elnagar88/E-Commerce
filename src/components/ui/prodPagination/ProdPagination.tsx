'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { AllProductsResponse } from "@/types/products.type"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export default function ProdPagination({productsList}: {productsList: AllProductsResponse}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  

  const totalPages = productsList.metadata.numberOfPages
  const index = Math.min(Math.max(Number(productsList.metadata.currentPage) || 1, 1), totalPages)

  function changePage(page: number) {
    const params = new URLSearchParams(searchParams.toString())

    params.set('page', page.toString())

    router.push(`?${params.toString()}`)
  }

  return (
    <Pagination className="my-5">
      <PaginationContent className="flex-wrap justify-center gap-2 sm:gap-3">

        {/* Previous Page */}
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${Math.max(index - 1, 1)}`}
            aria-disabled={index === 1}
            className={cn(
              "h-11 px-5 text-base",
              index === 1 && "pointer-events-none opacity-50"
            )}
            onClick={(e) => {
              e.preventDefault()

              if (index > 1) {
                changePage(index - 1)
              }
            }}
          />
        </PaginationItem>

        {/* Pages */}
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={index === page}
                className="h-11 w-11 text-base font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  changePage(page)
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {/* Next Page */}
        <PaginationItem>
          <PaginationNext
            href={`?page=${Math.min(index + 1, totalPages)}`}
            aria-disabled={index === totalPages}
            className={cn(
              "h-11 px-5 text-base",
              index === totalPages && "pointer-events-none opacity-50"
            )}
            onClick={(e) => {
              e.preventDefault()

              if (index < totalPages) {
                changePage(index + 1)
              }
            }}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}