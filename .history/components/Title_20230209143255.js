import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

const Logo = styled.img`

`

export default function Title() {

    return ( <titleCont>
        <Logo src="realeasy.svg"/>
    </titleCont>

    )
}