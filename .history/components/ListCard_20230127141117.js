import styled from "styled-components";

const CardCont = styled.div`
    display:flex;
    justify-content: center;
    width:244px;
    height:168px;
    border-radius:20px;
    justify-content:bottom;

`;

const TextCont = styled.div`
    display:flex;
    position:absolute;
   
    background-color:white;
    z-index:1;
    width:244px;
    height:8%;
    border-radius:20px;
`


export default function ListCard() {
    
    return ( <CardCont>
        <img src="listingpic.png"/>
        <TextCont>

        </TextCont>
    </CardCont>

    )
}