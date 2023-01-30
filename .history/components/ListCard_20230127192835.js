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
`


export default function ListCard() {
    
    return ( <CardCont>
        <img src="listingpic.png"/>
        <TextCont>
            <h4 style={{marginTop:8, marginLeft:20}}>$3,000,000</h4>
            <p style={{marginTop:-12, marginLeft:20}}>Vancouver, BC</p>
        </TextCont>
    </CardCont>

    )
}