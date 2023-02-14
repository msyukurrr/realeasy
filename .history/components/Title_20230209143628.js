import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;
    padding:20px;

`;

const Logo = styled.img`
    width:71.5px;
    height:44.5px;
`

export default function Title() {

    return ( <titleCont>
        <Logo src="realEasy.png"/>
    </titleCont>

    )
}