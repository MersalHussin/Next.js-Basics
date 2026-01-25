
import ProductDetails from "@/app/components/ProductDetails";
import { Suspense } from "react";
import ProductDetailsSkeleton from "@/app/components/ProductDetailsSkeleton";

import type { Metadata } from 'next'
 
type Props = {
  params: Promise<{ id: number }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = (await params).id
 
  // fetch post information
  const {title, description , thumbnail} = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  )
 
  return {
   title,
   description,
   openGraph:{
    images: thumbnail
   }

  }
}


interface IProps{
params: {
    id: number;
 }
}


    const page = async ({ params }: IProps ) => {
    const {id} = await params
     //  console.log(id);
    return (
        <>
        <h3>Product ID - {id} </h3>
        <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetails id={id} />
        </Suspense>
        </>
    );
}

export default page;