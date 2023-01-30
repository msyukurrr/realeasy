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
    
`


export default function ListCard() {
    
    return ( <CardCont>
        <img src="listingpic.png"/>
        <div>

        </div>
    </CardCont>

    )
}