import ProductSkeleton from "@/app/components/ProductSkeleton"
import ProductsList from "@/app/components/ProductsList"
import { Suspense } from "react"

async function getProducts() {
    const data = await fetch('https://dummyjson.com/products')
    const products = await data.json()
    return products
}

const ProductsPage = async () => {
    const productsData = await getProducts()
    
    return (
        <div>
            <h1 className="font-bold text-3xl mb-5">Our Latest Products</h1>
            <Suspense fallback={<ProductSkeleton />}>
                <ProductsList products={productsData.products} />
            </Suspense>
        </div>
    );
}

export default ProductsPage;