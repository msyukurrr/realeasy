import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";
import styled from "styled-components";

const CityBut = styled.div`
    display:flex;
    width:95;
    height:95;
    background-Image:
`;

export default function Listing({
    src='./house.png'
}){
    return(
        <><div className={styles.listing}>

        <Heading headingtxt="Where are you looking?"/>

        <input placeholder="Type a city..." style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}></input>

        <h3>Popular Suggestions</h3>

        <CityBut src={src} />

        






        </div>
        <NavBar></NavBar>
        
        </>
    )
}