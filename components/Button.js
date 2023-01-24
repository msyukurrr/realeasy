import styled from "styled-components";

const ButtonCont = styled.div`
display: flex;
justify-content: center;
`

const Button = styled.button`
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

export default function MainButton ({ 
    onClick=()=>{},
    src='./logo.png'
}){
    return <ButtonCont>
        <Button>
            <Icon src={src}></Icon>
        </Button>
    </ButtonCont>
}