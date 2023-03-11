import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Image from "next/image";




export default function Title() {

    return ( 
    <div className={styles.logocont}>
        <Image src="/realEasy.png" width={100} height={100}/>
    </div>

    )
}