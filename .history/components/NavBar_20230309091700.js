import styled from "styled-components";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";


export default function NavBar({
   
}){
    return <div className={styles.navbarcont}>
    <div className={styles.navbarcont}>
        <Link href="/">
            <div className={styles.homecont}>
                <Image src='/logo.png' height={35} width={45} alt="icon"/>
                <span>Home</span>
            </div>
        </Link>
        <Link href="/wishlist">
            <div className={styles.wishlistcont}>
                <Image src='/wishlist.png' height={35} width={30}></Image>
                <span >Wishlist</span>
            </div>
        </Link>
        <Link href="/listing">
            <div className={styles.listingcont} >
                <Image src='/listing.png' height={38} width={45}></Image>
                <span>Listing</span>
            </div>
        </Link>
        <Link href="/profile">
            <div className={styles.profilecont}>
                <Image src='/user.png' height={38} width={40}></Image>
                <span>Profile</span>
            </div>
        </Link>
    </div>
    </div>
}