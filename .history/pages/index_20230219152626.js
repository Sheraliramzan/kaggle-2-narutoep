import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import shows from '../data/naruto.json'
const inter = Inter({ subsets: ['latin'] })

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
      <div>
        {
          shows.map((show,index ) => {
            return(
              <div>
                <h1>{show.title}</h1>
              </div>
            )
          })
      </div>
      </main>
    </>
  )
}
