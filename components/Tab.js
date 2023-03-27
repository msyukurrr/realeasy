import styles from '../styles/Home.module.css';
import Image from 'next/image';


export default function ProfileTab() {
    return(
        <>
        <div style={{flexDirection:'column'}}>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Personal Information</div>
        </div>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Accessibility</div>
        </div>
        <div style={{display:'flex',borderRadius:'15px', marginBottom:20,backgroundColor:'white', width:'250px', justifyContent:'center', height:'30px', alignItems:'center'}}>
            <div style={{color:'black', fontWeight:500}}>Login & Security</div>
        </div>
        </div>
        </>

    )
}