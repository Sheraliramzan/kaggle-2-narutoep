import Image from 'next/image'

export default function Card(props) {
    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg ">
        <Image
          className="w-full h-64 object-cover"
          src="/narutoS.jpeg"
          alt="Naruto"
          width={500}
          height={400}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Episode {props.episodeNumber}: {props.title}
          </div>
          <p className="text-gray-700 text-base">
            Rating: {props.rating}
          </p>
        </div>
      </div>
    )
  }



