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
            <p style={{marginTop:8, marginLeft:12}}>$3,000,000</p>
            <h5 style={{marginTop:-12, marginLeft:12}}>Vancouver, BC</h5>
        </TextCont>
    </CardCont>

    )
}