import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;
   

`;

const Logo = styled.img`
    width:71.5px;
    height:44.5px;
    padding:20px
`

export default function Title() {

    return ( <titleCont>
        <Logo src="realEasy.png"/>
    </titleCont>

    )
}