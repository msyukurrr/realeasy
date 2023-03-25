import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import ListCard from "../components/ListCard";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { useRouter } from "next/router";
import Image from "next/image";
import SearchFilters from "../components/searchFilter";
import { ChakraProvider } from "@chakra-ui/react";


export default function Listing({ propertiesForSale, propertiesForRent }){
   
console.log(propertiesForRent, propertiesForSale);

    const [serachFilters, setSearchFilters] = useState(false);
    const router = useRouter();



    return ( <ChakraProvider><div className={styles.listing}>
             {/* <Heading headingtxt="Where are you looking?" color="white"/> */}
           
                <SearchFilters/>

          

        {/* <form style={{paddingTop:15}}>
           <input placeholder="Type a city..." 
             className={styles.input}
             type="text"></input>
        </form> */}

        {/* <div style={{marginBottom:200}}>
            {propertiesForSale.slice(0,10).map((property) => <ListCard  property={property} key={property.id} />)}
        </div> */}

        <NavBar></NavBar>
        
    </div>  </ChakraProvider>
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

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  
