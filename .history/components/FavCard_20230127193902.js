import styled from "styled-components";


const CardCont = styled.div`
    display:flex;
    width: 295px;
    height: 85px;
    background-color:white;
    border-radius:20px;
`;

export default function FavCard() {

    return ( <CardCont>
        <img src="house.png" style={{width:58, height:58, borderRadius:10, alignContent:'center'}}/>
    </CardCont>

    )
}