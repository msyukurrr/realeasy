import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"


export default function Listing(){
    return(
        <><div className={styles.listing}>

        <Heading headingtxt="Where are you looking?"/>

        <input placeholder="Type a city..." style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}></input>

        <Heading headingtxt="Popular Suggestions"








        </div>
        <NavBar></NavBar>
        
        </>
    )
}