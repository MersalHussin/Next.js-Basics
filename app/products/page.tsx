import Link from "next/link"


async function getProducts(){
    const data = await fetch('https://dummyjson.com/products')
    const products = await data.json()
    return products
}

const ProductsPage = async () => {
     const {products} = await getProducts()
     console.log(products);
    return (
            <div>
              {products.map((product:{id:number , title:string}, idx:number) => <Link className="block" href={`/products/${product.id}`} key={idx}>{product.title}</Link>)}
            </div>
    );
}

export default ProductsPage;