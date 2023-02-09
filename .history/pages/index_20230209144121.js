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

import CircleIcon from '../components/IconCircle'


export default function Home() {
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
  
      <div style={{display:"flex", marginTop:"-250px"}}>
          <MainButton
            w='135px'
            h='135px'
            src='./findanagent.png'
            iconh='70px'
            iconw='95px'
            lbltxt='Find an Agent'
            fs='16px'
            onClick={() => r.push("/findanagent")}
          ></MainButton>
          <MainButton
            w='135px'
            h='135px'
            src='./lightbulb.png'
            iconh='75px'
            iconw='80px'
            lbltxt='Tips'
            fs='16px'
          ></MainButton>
      </div>

      <h3 style={{color:'#5AA1FD', textAlign:'center'}}>New listings near you</h3>

      <div ></div>
        <ListCard/>
      </div>

      <NavBar></NavBar>
       
      </main>

    </>
  )
}
