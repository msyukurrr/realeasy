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
            <WishlistCont margintop="7px">
                <Icon src='./wishlist.png' height="35px" width="30px"></Icon>
                <NavList>Wishlist</NavList>
            </WishlistCont>
        </Link>
        <Link href="/listing">
            <ListingCont margintop="4px">
                <Icon src='./listing.png' height="38px" width="45px"></Icon>
                <NavList>Listing</NavList>
            </ListingCont>
        </Link>
        <Link href="/profile">
            <ListingCont margintop="4px">
                <Icon src='./user.png' height="38px" width="40px"></Icon>
                <NavList>Profile</NavList>
            </ListingCont>
        </Link>
    </div>
    </div>
}