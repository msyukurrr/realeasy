import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;

`;

export default function Title() {

    return ( <titleCont>
        <img src="realeasy.svg"/>
    </titleCont>

    )
}