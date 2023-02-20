import Image from "next/image";

function Card(){

  const [episodes, setEpisodes] = useState([]);

 
  const addData = async () => {
    setEpisodes(shows);
    console.log(shows);
  }
    return (
        <div className="m-2 ml-10 bg-orange-200 h-96 rounded-md w-80 ">
            <Image alt="" className=" w-full" src="/narutoS.jpeg" width={300} height={300}/>
            <button onClick={()=>A}>Add</button>
        </div>
    )
}
export default Card;