import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

const Logo = styled.img`
    width:143px;
    height:89px;
`

export default function Title() {

    return ( <titleCont>
        <Logo src="realEasy.png"/>
    </titleCont>

    )
}