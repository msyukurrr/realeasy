import styled from "styled-components";

const CardCont = styled.div`
    display:flex;
    justify-content: center;
    width:244px;
    height:168px;
    border-radius:20px;
    

`;

const TextCont = styled.div`
    display:flex;
    position:absolute;
    background-color:white;
    z-index:1;
    width:244px;
    height:55px;
    margin-top:120px;
    border-radius:20px;
    color:black;
    flex-direction:column;
    margin-top:-10;
`


export default function ListCard() {
    
    return ( <CardCont>
        <img src="listingpic.png"/>
        <TextCont>
            <h6>$3,000,000</h6>
            <p>Vancouver, BC</p>
        </TextCont>
    </CardCont>

    )
}