import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Cont = styled.div`
    display:flex;
    justify-content:left;
    padding:25px;
    background-color:#E6EEF8;
    position:fixed;
    z-index:1;
    width:100%;
   

`;

const Logo = styled.img`
    width:71.5px;
    height:44.5px;
    
`;

export default function Title() {

    return ( 
    <div className={styles.logocont}>
        <Image src="realEasy.png" width={100} height={100}/>
    </div>

    )
}