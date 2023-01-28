import styled from "styled-components";

const Container = styled.div`
display: flex;
margin-left: 50px;
width: 300px;
height: 100px;

`

const Word = styled.h1`
color: #5AA1FD;
font-weight: ${props=>props.fontweight};
`

export default function Heading({
    h1="Recommended by people around you",
    fw="300",
    headingtxt="Recommended by people around you"
}){
    return<>
    <Container>
    <Word fontweight={fw}
    >{headingtxt}</Word>
    </Container>
    </>
}
