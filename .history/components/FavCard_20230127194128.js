import styled from "styled-components";


const CardCont = styled.div`
    display:flex;
    width: 295px;
    height: 85px;
    background-color:white;
    border-radius:20px;
    align-items:center;
    color:black;;
`;

export default function FavCard() {

    return ( <CardCont>
        <img src="house.png" style={{width:58, height:58, borderRadius:10, marginLeft:15}}/>
        <p>$3,000,000</p>
        <p>Angus Dr Vancouver, BC</p>
    </CardCont>

    )
}