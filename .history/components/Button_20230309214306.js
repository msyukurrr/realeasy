import styled from "styled-components";
import styles from "../styles/Home.module.css";

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
    return <div className={styles.buttoncont}>
        <div className={styles.button} onClick={onClick} height={h} width={w}>
            <Icon src={src} height={iconh} width={iconw}></Icon>
            <Lbl fontsize={fs}>{lbltxt}</Lbl>
        </div>
    </div>
}