import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";



export default function Listing({

}){
    return(
        <><div className={styles.listing}>

        <Heading headingtxt="Where are you looking?"/>

        <input placeholder="Type a city..." style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}></input>

        <h3>Popular Suggestions</h3>

        <div>
            <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            <h5>Vancouver</h5>
        </div>

        <div>
            <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            <h5>Surrey</h5>
        </div>

        <div>
            <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            <h5>Burnaby</h5>
        </div>

        <div>
            <img src="house.png" style={{width:95, height:95, borderRadius:20}}/>
            <h5>Abbotsford</h5>
        </div>

        






        </div>
        <NavBar></NavBar>
        
        </>
    )
}