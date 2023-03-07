import styled from "styled-components";
import Link from "next/link";
import styles from "../styles/Home.module.css";







export default function NavBar({
    mt="5px",
    mb=""
}){
    return <div className={styles.navbarcont}>
    <div className={styles.navbarcont}>
        <Link href="/">
            <div margintop="6px">
                <Image src='./logo.png' height="45px" width="45px" alt="icon"/>
                <span>Home</span>
            </div>
        </Link>
        <Link href="/wishlist">
            <div margintop="7px">
                <Image src='./wishlist.png' height="35px" width="30px"></Image>
                <span>Wishlist</span>
            </div>
        </Link>
        <Link href="/listing">
            <div margintop="4px">
                <Image src='./listing.png' height="38px" width="45px"></Image>
                <span>Listing</span>
            </div>
        </Link>
        <Link href="/profile">
            <div margintop="4px">
                <Image src='./user.png' height="38px" width="40px"></Image>
                <span>Profile</span>
            </div>
        </Link>
    </div>
    </div>
}