import Image from "next/image";

interface IProps{
params: {
    id: number;
 }
}
async function getProducts(id:number){
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const products = await data.json()
    return products
}

 const page = async ({ params }: IProps ) => {
     const {id} = await params
     const {title , thumbnail } = await getProducts(id)
    //  console.log(id);
    return (
        <>
        <h3>Product ID - {id} </h3>
        <h1> {title} </h1>
        <Image src={thumbnail} alt={title} width={500} height={500} />
        <img src={thumbnail} alt={title} />
        </>
    );
}

export default page;