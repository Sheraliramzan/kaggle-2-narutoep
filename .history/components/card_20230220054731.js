import Image from 'next/image'

export default function Card(props) {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-orange-200">
      <Image
        className="w-full h-64 object-cover"
        src="/narutoS.jpeg"
        alt="Naruto"
        width={500}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Episode {props.numEpisode}: {props.title}
        </div>
        <p className="text-gray-700 text-base">
          Rating: {props.rate}
        </p>
        <p className="text-gray-700 text-base">
          Air Date: {props.airDate}
        </p>
      </div>
    </div>
  )
}



