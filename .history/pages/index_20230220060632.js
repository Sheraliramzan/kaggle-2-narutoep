import { useState, useEffect } from 'react'
import Head from 'next/head'
import shows from '../data/naruto.json'
import Card from '../components/card'

export default function Home() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <>
      <Head>
        <title>NarutoEps</title>
        <meta name="description" content="NarutoEps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Sharingan.webp" />
      </Head>
      <main>
        <div className="w-full h-full bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/back.webp')]">
          <div>
            <h1 className='text-center text-6xl text-white mb-5'>Naruto Ep Kaggle</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shows.map((show, index) => {
              return (
                <div key={index} className="w-full px-2">
                  <Card
                    title={show.Title}
                    episodeNumber={show.Num_episode}
                    rating={show.Rate}
                    animated={animated}
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