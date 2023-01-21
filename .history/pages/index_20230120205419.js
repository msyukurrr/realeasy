import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  var apiKey = "f197265764msh59f234f4c4e0ab5p1bcc23jsndfd04c467645";
  const url = `https://realty-in-ca1.p.rapidapi.com/keywords/list`



    axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data)
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })




  return (
    <>
      <Head>
        <title>Current Weather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type='text'
        />
      </main>

    </>
  )
}
