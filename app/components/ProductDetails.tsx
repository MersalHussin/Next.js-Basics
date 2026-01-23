import Button from "@/app/components/Button";
import Image from "next/image";

interface IProps {
    id: number;
}

async function getProducts(id: number) {
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const products = await data.json()
    return products
}

const ProductDetails = async ({ id }: IProps) => {
    const { title, thumbnail } = await getProducts(id)
    
    return (
        <>
            <h1>{title}</h1>
            <Image src={thumbnail} alt={title} width={500} height={500} />
            <Button text="add to card" />
        </>
    );
}

export default ProductDetails;