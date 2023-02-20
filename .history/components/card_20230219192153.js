import Image from "next/image";

function Card(){
    return (
        <div className="m-2 bg-orange-300 h-96 rounded-md ">
            <Image className=" bg-white w-full rounded-md" src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;