import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { useState } from "react";


const axios = require("axios");
export const baseURL = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential'



export default function Listing({ }){
   const [city, setCity] = useState('');
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    
const options = {
  method: 'GET',
  url: 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential',
  params: {
    LatitudeMax: '81.14747595814636',
    LatitudeMin: '-22.26872153207163',
    LongitudeMax: '-10.267941690981388',
    LongitudeMin: '-136.83037765324116',
    CurrentPage: '1',
    RecordsPerPage: '10',
    SortOrder: 'A',
    SortBy: '1',
    CultureId: '1',
    NumberOfDays: '0',
    BedRange: '0-0',
    BathRange: '0-0',
    RentMin: '0'
  },
  headers: {
    'X-RapidAPI-Key': '30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7',
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
};

var apiKey = "30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7"
const url = `https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116`


const searchLocation = (event) => {
  
    axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data);
      console.log(response.data);
      setErrorMessage("");
    }).catch(err => {
      console.log(err);
      setErrorMessage("Please enter another location");
      setData({});
    })
    setLocation('')
}}

    

    return ( <><div className={styles.listing}>
            <Heading headingtxt="Where are you looking?"/>
        <form>
              <input placeholder="Type a city..." 
              style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyDown={searchLocation}
              type="text"></input>
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
