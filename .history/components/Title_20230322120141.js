import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";




export default function Title() {

    return ( 
    <div className={styles.logocont}>
        <Link href="/">
            <Image src="/realEasy.png" width={80} height={50}/>
        </Link>
    </div>

    )
}