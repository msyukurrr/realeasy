import styled from "styled-components";
import MainButton from "./Button";

const ButtonCont = styled.div`
display: flex;
`

export default function CatButton ({
}){
    return <ButtonCont>
        <MainButton src="./country.png"></MainButton>
        <MainButton src="./Condo.png" lbltxt="Condo"></MainButton>
        <MainButton src="./City.png" lbltxt="Townhouse"></MainButton>
        <MainButton src="./smallbusiness.png" lbltxt="Commercial"></MainButton>
    </ButtonCont>
}