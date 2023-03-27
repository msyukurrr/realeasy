import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFillPeopleFill } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';


export default function MainButton ({ }){
const r = useRouter();

    return <div style={{display:'flex', marginTop:'20%', justifyContent:'center'}}>
        <button onClick={() => {r.push('/findanagent')}
        }
        style={{display:'flex', flexDirection:'column', alignItems:'center', fontFamily:'ubuntu, cursive'
        , justifyContent:'center', backgroundColor:'white', color:'#5AA1FD',
         height:120, width: 120, borderRadius:15, border:'none' }}>
            
            <BsFillPeopleFill size={60}/>
            <div style={{fontSize:16}}>Find an Agent</div>
        </button>
    </div>
}


