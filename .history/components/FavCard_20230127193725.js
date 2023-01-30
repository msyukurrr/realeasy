import styled from "styled-components";


const CardCont = styled.div`
    display:flex;
    width: 295px;
    height: 85px;
`;

export default function FavCard() {

    return ( <CardCont>
        <img src="house.png" style={{width:58, height:58}}
    </CardCont>

    )
}