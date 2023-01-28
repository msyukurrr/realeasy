import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import MainButton from "../components/Button.js";


export default function Listing(){
    return(
        <><div className={styles.listing}>

        <Heading headingtxt="Where are you looking?"/>

        <input placeholder="Type a city..." style={{width:230, height:50, borderRadius:10, backgroundColor:"white", border:'transparent'}}></input>

        <h3>Popular Suggestions</h3>

        <Button />






        </div>
        <NavBar></NavBar>
        
        </>
    )
}