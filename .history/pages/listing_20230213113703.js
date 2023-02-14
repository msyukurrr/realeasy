import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";





export default function Listing({ }){
   





    

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
