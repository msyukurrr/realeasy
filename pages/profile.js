import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import Title from "../components/Title";
import Head from "next/head";
import ProfileTab from "../components/Tab";
import Image from "next/image";

export default function Profile(){
    return(
        <>
        <Head>
        <title>RealEasy</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/logo.png" />
      </Head>
         <Title></Title>
        <Heading headingtxt="Profile"></Heading>

        <div style={{display:'flex', justifyContent:'center', marginBottom:30}}>
            <Image src={'/../public/avatar.png'} height={250} width={250} style={{borderRadius:'50%'}}></Image>
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{flexDirection:'column'}}>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Personal Information</div>
        </div>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Accessibility</div>
        </div>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Login & Security</div>
        </div>
        </div>
        </div>
        <NavBar></NavBar>

        </>
    )
}