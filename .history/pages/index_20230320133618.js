import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import MainButton from '../components/Button'
import axios from 'axios'
import CatButton from '../components/CatButton'
import NavBar from '../components/NavBar'
import ListCard from '../components/ListCard'
import FavCard from '../components/FavCard'
import Title from '../components/Title'
import {Image, Link} from 'next/image'
import CircleIcon from '../components/IconCircle'
import { GetStaticProps } from '../pages/listing';
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesForRent }) {
  const r = useRouter();




  return (
    <>
      <Head>
        <title>RealEasy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Title></Title>

      <main className={styles.main}>
      
      

      

      <div style={{display:'flex', flexDirection:"column", marginTop:0}}>
  
      <div style={{display:"flex", position:'relative'}}>
          <MainButton/>
      </div>

      <a href="/map">
       <h3 style={{color:'#5AA1FD', textAlign:'center'}}>New listings near you</h3>

      </a>

      <div className={styles.list}></div>
        
        {propertiesForSale.slice(0,5).map((property) => <ListCard property={property} key={property.id} />)}
        
      </div>


      <div style={{height:200}}>
      <a href="/listing">
       <h3 style={{color:'#5AA1FD', textAlign:'center'}}>See more...</h3>

      </a>

      </div>

      <NavBar></NavBar>
       
      </main>

    </>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
      props: {
          propertiesForSale: propertyForSale?.hits,
          propertiesForRent: propertyForRent?.hits
      }
  };
}
