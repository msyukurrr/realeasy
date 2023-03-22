import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";


export default function MainButton ({ }){
const r = useRouter();

    return <div style={{display:'flex', marginTop:'10%', fontFamily:'Poppins, sans-serif'}}>
        <button onClick={() => {r.push('/findanagent')}
        }
        style={{display:'flex', flexDirection:'column', margin:10, alignItems:'center', justifyContent:'center', backgroundColor:'white', color:'#5AA1FD', height:150, width: 150, borderRadius:15, border:'none' }}>
            <Image src={'/findanagent.png'} width={100} height={80}></Image>
            <div style={{fontSize:16}}>Find an Agent</div>
        </button>
        <button style={{display:'flex', flexDirection:'column', margin:10, alignItems:'center', justifyContent:'center', backgroundColor:'white', color:'#5AA1FD', height:150, width: 150, borderRadius:15, border:'none' }}>
            <Image src={'/lightbulb.png'} width={100} height={80}></Image>
            <div style={{fontSize:16}}>Tips</div>
        </button>
    </div>
}


