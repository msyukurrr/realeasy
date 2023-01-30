import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
display: flex;
margin-top: -550px;
margin-left: 400px;
`
const Map = styled.img`
height: 40px;

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