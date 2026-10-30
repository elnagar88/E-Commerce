import { getAllSubCategories } from '@/app/services/subCategories.services';
import EmptyProduct from '@/components/ui/emptyProduct/EmptyProduct';
import SubCategoriesCard from '@/components/ui/subCategoriesCard/SubCategoriesCard';

export default async function page({params}:{params:Promise<{subCategories:string}>}) {
  const {subCategories}:{subCategories:string} = await params
  const Categories = await getAllSubCategories()
  
  const subCat = Categories.filter((cat)=>{
    return cat.category == subCategories
  })
  
  
  
  return <>
    {subCat.length>0?<>
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4">
      {subCat.map((categorie)=>{return <SubCategoriesCard key={categorie._id} subCategorie={categorie}/>})}
    </div>
    </>:<EmptyProduct/>}
  </>
}
