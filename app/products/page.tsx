import Link from "next/link";

interface IProps{


}


const ProductsPage = ({}: IProps ) => {
    return (
        <div>
            {Array.from({length:10},(_,idx) =>(
                <h3 key={idx}>
                     <Link href={`/products/${idx+1}`}> Product ID - {idx + 1}</Link>
                     </h3>
            ))}
        </div>
    );
}

export default ProductsPage;