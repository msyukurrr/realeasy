import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`

const Box = styled.div`
display: flex;
height: 100px;
width: 350px;
background-color: white;
border-radius: 15px;
margin: 10px;
`
const Image = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
display: flex;
margin-left: 15px;
margin-top: 10px;
`

const Description = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-left: 20px;
`
const Name = styled.span`
font-weight: bold;
font-size: 20px;
margin-bottom: 2px;
`
const Agency = styled.span`
opacity: 0.5;
font-size: 14px;
`
const Experience = styled.span`
font-size: 14px;
margin-top: 2px;
`
const Listings = styled.span`
font-size: 14px;
margin-top: 2px;
`



export default function AgentListing({
    src='./yungrajaa.jpeg',
    name="Yung Raja",
    agency="RE/MAX",
    experience="20 years of experience",
    listings="10 active listings"
}){
    return <>
    <Container>
    <Box>
        <Image src={src}></Image>
        <Description>
        <Name>{name}</Name>
        <Agency>{agency}</Agency>
        <Experience>{experience}</Experience>
        <Listings>{listings}</Listings>
        </Description>
    </Box>
    </Container>
    </>
}