import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { baseUrl, fetchApi } from './api/realEstate';
import { useState } from "react";



export default function Listing({ propertiesForSale }){
    console.log(propertiesForSale)
    const [city, setCity] = useState('');


    return(
        <><div className={styles.listing}>
            <Heading headingtxt="Where are you looking?"/>
        <form>
              <input placeholder="Type a city..." 
              style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}
              type="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}></input>
        </form>
        


      

        {/* <h3>Popular Suggestions</h3>

    <div>
        
        <div style={{display:'flex', flexDirection:'row', paddingTop:10, paddingBottom:15}}>
            <div>
                <h5 style={{display:'flex', position:'absolute'}}>Vancouver</h5>
                <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            </div>

            <div>
                <h5 style={{display:'flex', position:'absolute'}}>Surrey</h5>
                <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
            <div>
                <h5 style={{display:'flex', position:'absolute'}}>Burnaby</h5>
                <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
                
            </div>

            <div>
                <h5 style={{display:'flex', position:'absolute'}}>Abbotsford</h5>
                <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
                
            </div>
        </div>

    </div> */}






        </div>
        <NavBar></NavBar>
        
        </>
    )
}

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116`)

    return{
         props: {
            propertiesForSale: propertyForSale?.hits
        }
    }
       
}   