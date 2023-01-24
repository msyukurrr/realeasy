import styled from "styled-components";

const ButtonCont = styled.div`
display: flex;
`

const Button = styled.button`
display:flex;
flex-direction: column;
margin: 10px;
align-items: center;
justify-content: center;
background-color: white;
color: #5AA1FD;
height: ${props=>props.height};
width: ${props=>props.width};
border-radius: 15px;
border: none;
&:hover{
    border: 1px solid;
    padding: 10px;
    box-shadow: 2px 2px #888888;
}
`

const Icon = styled.img`
height: ${props=>props.height};
width: ${props=>props.width};
`

const Lbl = styled.span`
display: block;
font-size: ${props=>props.fontsize};
`

export default function MainButton ({ 
    onClick=()=>{},
    src='./logo.png',
    lbltxt='House',
    h="69px",
    w="69px",
    fs="11px",
    iconh="35px",
    iconw="35px"
}){
    return <ButtonCont>
        <Button height={h} width={w}>
            <Icon src={src} height={iconh} width={iconw}></Icon>
            <Lbl fontsize={fs}>{lbltxt}</Lbl>
        </Button>
    </ButtonCont>
}