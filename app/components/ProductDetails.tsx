import Button from "@/app/components/Button";
import Image from "next/image";

interface IProps {
    product: {
        title: string;
        thumbnail: string;
    };
}

const ProductDetails = ({ product }: IProps) => {
    const { title, thumbnail } = product
    
    return (
        <>
            <h1>{title || 'No title'}</h1>
            <Image src={thumbnail || '/placeholder.jpg'} alt={title || 'Product'} width={500} height={500} />
            <Button text="add to card" />
        </>
    );
}

export default ProductDetails;