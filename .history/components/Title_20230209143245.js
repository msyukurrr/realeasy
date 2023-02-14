import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

const logo = styled.img`

`

export default function Title() {

    return ( <titleCont>
        <logo src="realeasy.svg"/>
    </titleCont>

    )
}