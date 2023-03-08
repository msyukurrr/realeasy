import styled from "styled-components";

const Cont = styled.div`
    display:flex;
    justify-content:left;
    padding:25px;
    width:100%;
    position:fixed;
    z-index:1;
   

`;

const Logo = styled.img`
    width:71.5px;
    height:44.5px;
    
`;

export default function Title() {

    return ( 
    <Cont>
        <Logo src="realEasy.png"/>
    </Cont>

    )
}