import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";





export default function Listing({ }){
   
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://realty-mole-property-api.p.rapidapi.com/properties',
  params: {address: '5500 Grand Lake Dr, San Antonio, TX, 78244'},
  headers: {
    'X-RapidAPI-Key': 'ed34dd816cmsh8ea61bffd2a6260p1fbf54jsnc979e2a46e7c',
    'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




    

    return ( <><div className={styles.listing}>
            <Heading headingtxt="Where are you looking?" color="white"/>
        <form style={{paddingTop:15}}>
              <input placeholder="Type a city..." 
              style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyDown={searchLocation}
              type="text"></input>
        </form>
        
       

      

        

        </div>
        <NavBar></NavBar>
        
        </>
    )
}
