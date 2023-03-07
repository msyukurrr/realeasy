import styled from "styled-components";
import Link from "next/link";
import DefaultImage from '../public/house.jpeg';
import Image from "next/image";
import styles from "../styles/Home.module.css";



const TextCont = styled.div`
    display:flex;
    position:absolute;
    background-color:white;
    z-index:1;
    width:80%;
    height:20%;
    margin-top:120px;
    border-radius:20px;
    color:black;
    flex-direction:row;
`



export default function ListCard({
    property: {
        coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVarified, externalID, location, name
    }
    
}) {

    
    
    return ( <Link href={`/property/${externalID}`} passHref >
    
        <div className={styles.cardCont}>

            <div className={styles.textCont}>
                <Image src={DefaultImage} alt="img" width={150} height={100}/>
                <div>
                    <h4 style={{marginTop:8, marginLeft:20}}>{title}</h4>
                <p style={{marginTop:-18, marginLeft:20}}>${price}</p>
                </div>
                
            </div>
        </div>
          
    </Link>
    
    
  
    )
}