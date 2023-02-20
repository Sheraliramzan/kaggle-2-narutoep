import Image from 'next/image'

export default function Card(props) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <Image
        className="w-full h-64 object-cover"
        src="/img.jpg"
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
This will create a Card component for each object in the shows array and display the episode number, title, and rating for each episode.




Sherali Ramzan
can you please use usestate and useeffect
Sure, here's an example of how you can use useState and useEffect to fetch the data from the naruto.json file and display it on the page:

javascript
Copy code
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/card';

export default function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('/naruto.json');
      const data = await response.json();
      setShows(data);
    }
    fetchShows();
  }, []);

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
            {shows.map((show, index) => (
              <div key={index}>
                <Card
                  title={show.Title}
                  episodeNumber={show.Num_episode}
                  rating={show.Rate}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
In the code above, we define a state variable shows using the useState hook and initialize it with an empty array. Then we use the useEffect hook to fetch the data from the naruto.json file and update the state variable shows with the fetched data. The second argument to useEffect is an empty array, which means that the effect will only run once when the component mounts.

Once the data is fetched and stored in the shows state variable, we use the map function to create a Card component for each object in the shows array, passing in the episode number, title, and rating as props to the Card component.




Sherali Ramzan
there are no shows! just fetch the data from naruto.json
My apologies, I misunderstood your request. To fetch data from the naruto.json file and use useState and useEffect, you can modify the Home component as follows:

javascript
Copy code
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Card from '../components/card'

export default function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch('/data/naruto.json');
      const data = await res.json();
      setShows(data);
    }

    fetchShows();
  }, []);

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
              return <Card key={index} title={show.Title} numEpisode={show.Num_episode} rate={show.Rate} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}
Here, useState is used to declare a state variable shows, which will hold the data fetched from the naruto.json file. useEffect is used to fetch the data from the JSON file when the component mounts.

The shows.map function is used to loop through the shows array and generate a Card component for each item in the array, passing the relevant data as props. Note that you should import the Card component at the top of the file before using it in the component.




Sherali Ramzan
nothing can be seen
It's possible that the file path to naruto.json is incorrect, or the JSON file itself is not formatted correctly. Here are some possible issues to check:

Make sure that the file path to naruto.json is correct and that the file is in the correct location. Double-check the path and ensure that the file is in the data directory.

Make sure that the JSON file is formatted correctly. Check the file for syntax errors or formatting issues. You can use an online JSON validator like JSONLint to check the file for errors.

Ensure that the data in the JSON file is in the format that you expect. Check that the data is an array of objects, and that each object has the expected properties.

Check the browser console for any errors that might be preventing the data from being displayed. If there are any errors, address them first and see if that resolves the issue.








