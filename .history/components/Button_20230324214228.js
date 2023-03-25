import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFillPeopleFill } from 'react-icons/bs';


export default function MainButton ({ }){
const r = useRouter();

    return <div style={{display:'flex', marginTop:'10%'}}>
        <button onClick={() => {r.push('/findanagent')}
        }
        style={{display:'flex', flexDirection:'column', margin:10, alignItems:'center', fontFamily:'ubuntu, cursive'
        , justifyContent:'center', backgroundColor:'white', color:'#5AA1FD',
         height:120, width: 120, borderRadius:15, border:'none' }}>
            
            <BsFillPeopleFill size={small}>
            <div style={{fontSize:16}}>Find an Agent</div>
        </button>
        <button style={{display:'flex', flexDirection:'column', margin:10,fontFamily:'ubuntu, cursive',
         alignItems:'center', justifyContent:'center', backgroundColor:'white',
          color:'#5AA1FD', height:120, width: 120, borderRadius:15, border:'none' }}>
            <Image src={'/lightbulb.png'} width={100} height={90}></Image>
            <div style={{fontSize:16}}>Tips</div>
        </button>
    </div>
}


