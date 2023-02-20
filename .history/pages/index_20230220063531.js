import { useState, useEffect } from 'react'
import Head from 'next/head'
import shows from '../data/naruto.json'
import Card from '../components/card'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>NarutoEps</title>
        <meta name="description" content="NarutoEps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link className={` ${isLoaded ? 'animate-bounce'}`} rel="icon" href="/Sharingan.webp" />
      </Head>
      <main>
        <div className={`w-full h-full bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/back.webp')] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <h1 className={`text-center text-7xl text-white mb-5 text-red-600 ${isLoaded ? 'animate-bounce' : ''}`}>Naruto Ep Kaggle</h1>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${isLoaded ? 'animate-fade-in-up' : ''}`}>
            {shows.map((show, index) => {
              return (
                <div key={index} className="w-full px-2">
                  <Card
                    title={show.Title}
                    episodeNumber={show.Num_episode}
                    rating={show.Rate}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}