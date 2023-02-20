import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Card(props) {
  const [hovered, setHovered] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('bg-orange-200');

  useEffect(() => {
    if (hovered) {
      setBackgroundColor('bg-blue-200');
    } else {
      setBackgroundColor('bg-orange-200');
    }
  }, [hovered]);

  return (
    <div
      className={`max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg ${backgroundColor}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 md:h-64 lg:h-72">
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
  );
}