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
height: 69px;
width: 69px;
border-radius: 15px;
border: none;
&:hover{
    border: 1px solid;
    padding: 10px;
    box-shadow: 2px 2px #888888;
}
`

const Icon = styled.img`
height: 40px;
width: 40px;
`

const Lbl = styled.span`
display: block;
font-size: 11px;
`

export default function MainButton ({ 
    onClick=()=>{},
    src='./logo.png',
    lbltxt='House'
}){
    return <ButtonCont>
        <Button>
            <Icon src={src}></Icon>
            <Lbl>{lbltxt}</Lbl>
        </Button>
    </ButtonCont>
}