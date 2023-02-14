import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
position: fixed;
margin-left: 400px;
top: 0;
margin-top: 20px;
`
const Map = styled.img`
height: 40px;
color:'blue'

`

export default function CircleIcon({
    src="./map.png"
}){
    return <>
    <Container>
    <Link href="/map">
    <Map src={src}></Map>
    </Link>
    </Container>
    </>
}