import styled from "styled-components";
import Link from "next/link";
import DefaultImage from '../public/house.jpeg';
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function ListCard({
    property: {
        coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVarified, externalID, location, name
    }
}) {
    return ( <Link href={`/property/${externalID}`} passHref >
    
        <div className={styles.cardCont}>

            <div className={styles.textCont}>
                <Image className={styles.image} src={coverPhoto ? coverPhoto.url : DefaultImage} alt="img" width={150} height={130}/>
                <div className={styles.cardTxt}>
                    <h4 style={{marginTop:8, marginLeft:20}}>{title}</h4>
                    <p style={{marginTop:-18, marginLeft:20}}>${price}</p>
                    <p style={{marginLeft:20, marginBottom:10}}>Beds:{rooms}</p>
                    <p style={{marginLeft:20}}>Bath:{baths}</p>
                </div>
                
            </div>
        </div>
          
    </Link>
    
    
  
    )
}