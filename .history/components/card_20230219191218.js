import Image from "next/image";

function Card(){
    return (
        <div className="m-2 Class
        Properties
        Preview 
        bg-inherit	background-color: inherit;
        bg-current	background-color: currentColor;
        bg-transparent	background-color: transparent;
        bg-black ">
            <Image src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;