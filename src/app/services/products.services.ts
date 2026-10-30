import { IProductDetails, IProductDetailsResponse } from "@/types/productDetails.type"
import { AllProductsResponse } from "@/types/products.type"

export async function getAllProducts(limit:string,page:string='1',sort:string='-createdAt',minPrice:string='0',maxPrice:string='100000000'): Promise<AllProductsResponse> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products?limit=${limit}&page=${page}&sort=${sort}&price[gte]=${minPrice}&price[lte]=${maxPrice}`)

    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }

    const data: AllProductsResponse = await response.json()
    return data
}

export async function getProductDetails(id: string): Promise<IProductDetails> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products/${id}`)
    const data: IProductDetailsResponse = await response.json()
    return data.data
}