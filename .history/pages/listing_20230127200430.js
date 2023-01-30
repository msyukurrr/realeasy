import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"


export default function Listing(){
    return(
        <><div className={styles.listing}>

        <Heading headingtxt="Where are you looking?"/>

        <input placeholder="Type a city..."></input>










        </div>
        <NavBar></NavBar>
        
        </>
    )
}