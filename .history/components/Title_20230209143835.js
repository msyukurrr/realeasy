import styled from "styled-components";

const titleCont = styled.div`
    display:flex;
    justify-content:left;
    
   

`;

const Logo = styled.img`
    width:71.5px;
    height:44.5px;
  
`;

export default function Title() {

    return ( <titleCont>
        < src="realEasy.png"/>
    </titleCont>

    )
}