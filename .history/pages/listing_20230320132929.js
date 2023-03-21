import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import ListCard from "../components/ListCard";
import { baseUrl, fetchApi } from "../utils/fetchApi";




export default function Listing({ propertiesForSale, propertiesForRent }){
   
console.log(propertiesForRent, propertiesForSale);




    

    return (<div className={styles.listing}>
             <Heading headingtxt="Where are you looking?" color="white"/>
         <form style={{paddingTop:15}}>
           <input placeholder="Type a city..." 
             className={styles.input}
            
             type="text"></input>
        </form>

        <div >
            {propertiesForRent.slice(0,5).map((property) => <ListCard property={property} key={property.id} />)}
        </div>

       

        <NavBar></NavBar>
        
    </div>
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
