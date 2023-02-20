import Image from 'next/image'

export default function Card(props) {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-orange-200">
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/narutoS.jpeg"
          alt="Naruto"
        />
      </div>
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


