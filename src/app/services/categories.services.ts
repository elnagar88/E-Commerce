import { ICategoriesResponse, IDataCategories } from "@/types/categories.type"

export async function getAllCategories():Promise<IDataCategories[]>{
    const response = await fetch(`${process.env.BASE_URL}/api/v1/categories`)
    const data:ICategoriesResponse = await response.json()
    return data.data
}