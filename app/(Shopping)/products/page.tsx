import ProductSkeleton from "@/app/components/ProductSkeleton"
import ProductsList from "@/app/components/ProductsList"
import { Suspense } from "react"

const ProductsPage = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl mb-5">Our Latest Products</h1>
            <Suspense fallback={<ProductSkeleton />}>
                <ProductsList />
            </Suspense>
        </div>
    );
}

export default ProductsPage;