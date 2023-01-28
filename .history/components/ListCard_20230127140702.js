import styled from "styled-components";

const CardCont = styled.div`
    display:flex;
    justify-content: center;
    width:244px;
    height:168px;

`;


export default function ListCard() {
    image="listingpic.png"
    return ( <CardCont>
        <img src={image}/>
        <div>

        </div>
    </CardCont>

    )
}