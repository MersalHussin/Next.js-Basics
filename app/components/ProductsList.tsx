import Link from "next/link";

interface IProps {
    products: Array<{ id: number, title: string }>;
}

const ProductsList = ({ products }: IProps) => {
    return (
        <>
            {products.map((product: { id: number, title: string }, idx: number) => (
            <li key={idx}>

                <Link className="block" href={`/products/${product.id}`}>
                    {product.title}
                </Link>
            </li>
))}
        </>
    );
}

export default ProductsList;