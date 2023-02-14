import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

const Logo = styled.img`
    width:50px;
    height:50px;
`

export default function Title() {

    return ( <titleCont>
        <Logo src="realeasy.svg"/>
    </titleCont>

    )
}