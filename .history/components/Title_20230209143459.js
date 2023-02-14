import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

const Logo = styled.img`
    width:100px;
    height:100px;
`

export default function Title() {

    return ( <titleCont>
        <Logo src="public/realEasy.png"/>
    </titleCont>

    )
}