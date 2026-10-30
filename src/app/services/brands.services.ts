import { IBrandsData, IBrandsResponse } from "@/types/brands.type";
import { IDataProductsOfBrand, IProductsOfBrand } from "@/types/productsOfBrand.typr";

export async function getAllBrands():Promise<IBrandsData[]>{
    const response = await fetch(`${process.env.BASE_URL}/api/v1/brands`)
    const data:IBrandsResponse = await response.json()    
    return data.data
}
export async function getProductsOfBrand(id:string):Promise<IDataProductsOfBrand[]>{
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products?brand=${id}`)
    const data:IProductsOfBrand = await response.json()    
    return data.data
}
