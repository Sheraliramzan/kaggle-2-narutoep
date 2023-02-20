import Image from "next/image";
import shows from '../data/naruto.json'
import { useState } from 'react'

function Card(){

    return (
        <div className="m-2 ml-10 bg-orange-200 h-96 rounded-md w-80 ">
            <Image alt="" className=" w-full" src="/narutoS.jpeg" width={300} height={300}/>
        </div>
    )
}
export default Card;