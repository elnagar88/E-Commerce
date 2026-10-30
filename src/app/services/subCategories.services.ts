import { ISubCategoriesData, ISubCategoriesResponse } from "@/types/subCategories";
import { IDataSubCategoriesProducts, IResponseSubCategoriesProducts } from "@/types/subCategoriesProduct.type";

export async function getAllSubCategories():Promise<ISubCategoriesData[]>{
    const response = await fetch(`${process.env.BASE_URL}/api/v1/subcategories`)
    const data:ISubCategoriesResponse = await response.json()
    
    return data.data
}

export async function getProductsOfSubCategories(id:string):Promise<IDataSubCategoriesProducts[]>{
    const response = await fetch(`${process.env.BASE_URL}/api/v1/products?subcategory=${id}`)
    const data:IResponseSubCategoriesProducts = await response.json()
    return data.data
}
