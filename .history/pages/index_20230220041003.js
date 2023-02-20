import Head from 'next/head'
import Image from 'next/image'
import shows from '../data/naruto.json'
import Card from '../components/card'
import { useState, useEffect } from 'react'


export default function Home() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Fetch the episodes data from an API endpoint, for example:
    fetch('/data/naruto.json')
      .then((response) => response.json())
      .then((data) => setEpisodes(data))
      .catch((error) => console.error(error))
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
      <div className="w-full h-full bg-cover bg-fixed  bg-no-repeat bg-center bg-[url('/img.jpeg')]">
        <div>
          <h1 className='text-center text-6xl text-white mb-5'>Naruto Ep Kaggle</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </main>
    </>
  )
}
