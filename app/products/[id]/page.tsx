interface IProps{

params: {
    id: string;
 }

}


 const page = async ({ params }: IProps ) => {
     const {id} = await params
     console.log(id);
    return (
        <div>Product ID - {id} </div>
    );
}

export default page;