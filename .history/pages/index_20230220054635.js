import Head from 'next/head'
import { useState, useEffect } from 'react';
import Card from '../components/card'
import shows from '../data/naruto.json'

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
          <div className="grid grid-cols-3 gap-4">
            {shows.map((show, index) => {
              return (
                <Card 
                  key={index} 
                  title={show.Title} 
                  numEpisode={show.Num_episode} 
                  rate={show.Rate} 
                  airDate={show.Airdate}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  )
}