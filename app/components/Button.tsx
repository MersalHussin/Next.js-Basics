
interface IProps{
text:string ,
onClick: () =>  void
}

const Button = ({text , onClick} : IProps) => {
    return (
        <button onClick={onClick} className="bg-red-50 text-black px-5 py-2 rounded-md">
            {text}
        </button>
    );
}

export default Button;
