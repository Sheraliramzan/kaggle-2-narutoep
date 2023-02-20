import Head from 'next/head'
import shows from '../data/naruto.json'
import Card from '../components/card'

export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shows.map((show, index) => {
              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2">
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
