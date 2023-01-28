import styled from "styled-components";
import Link from "next/link";

const NavBarCont = styled.div`
position: fixed;
bottom: 0;
width: 100%;
`
const NavCont = styled.nav`
display: flex;
justify-content: space-around;
width: 100%;
background-color: transparent;
height: 60px;
`
const HomeCont = styled.div`
width: 50px;
height: 50px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: ${props=>props.margintop};
`
const WishlistCont = styled.div`
width: 50px;
height: 50px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 30px;
margin-top: ${props=>props.margintop};
margin-bottom: ${props=>props.marginbottom};
`
const ListingCont = styled.div`
width: 50px;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 30px;
margin-top: ${props=>props.margintop};
`
const ProfileCont = styled.div`
display:flex;
margin-left: 30px;
margin-top: ${props=>props.margintop};
`

const Icon = styled.img`
display: flex;
justify-content: center;
height: ${props=>props.height};
width: ${props=>props.width};
display: flex;
`

const NavList = styled.span`
display: flex;
align-self: center;
color: #5AA1FD;
font-size: 12px;
`


export default function NavBar({
    mt="5px",
    mb=""
}){
    return <NavBarCont>
    <NavCont>
        <Link href="/">
            <HomeCont margintop="6px">
                <Icon src='./logo.png' height="45px" width="45px"/>
                <NavList>Home</NavList>
            </HomeCont>
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
    </NavCont>
    </NavBarCont>
}