import Image from "next/image";

function Card(){
    return (
        <div className="m-2 bg-orange-200 h-96 rounded-md w- ">
            <Image className=" bg-white w-full" src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;