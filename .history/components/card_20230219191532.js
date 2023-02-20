import Image from "next/image";

function Card(){
    return (
        <div className="m-2 bg-black h-96 rounded-md border-white ">
            <Image className=" rounded-md" src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;