import Image from 'next/image'

export default function Card(props) {
    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg bg-orange-200">
        <div className="relative h-64">
          <Image
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            src="/narutoS.jpeg"
            alt="Naruto"
            width={500}
            height={400}
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



