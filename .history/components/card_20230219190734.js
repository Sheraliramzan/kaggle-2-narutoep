import Image from "next/image";

function Card(){
    return (
        <div className="m-5 p-5">
            <Image src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;