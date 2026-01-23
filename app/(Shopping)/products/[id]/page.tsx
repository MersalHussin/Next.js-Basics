
import ProductDetails from "@/app/components/ProductDetails";
import { Suspense } from "react";
import ProductDetailsSkeleton from "@/app/components/ProductDetailsSkeleton";

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