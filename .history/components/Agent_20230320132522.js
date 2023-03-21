import styled from "styled-components";
import record from '../data/agent.json'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import AiFillStar from "react-icons/ai"

const Container = styled.div`
display: flex;
justify-content: center;
`

const Description = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-left: 20px;
`
const Name = styled.span`
font-weight: bold;
font-size: 20px;
margin-bottom: 2px;
`
const Agency = styled.span`
opacity: 0.5;
font-size: 14px;
`
const Experience = styled.span`
font-size: 14px;
margin-top: 2px;
`
const Listings = styled.span`
font-size: 14px;
margin-top: 2px;
`



export default function AgentListing({
}){
    return <>
{
              record.map( (rec, index) => {
                return(
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <div key={index} className={styles.agentCont}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:20}}>
                        <Image src={rec.src} width={100} height={120} style={{display:'flex', borderRadius:20, marginTop:0, marginLeft: 0, objectFit:'cover'}}></Image>
                            <div style={{display:'flex', flexDirection:'column', marginTop:10, marginLeft:20}}>
                                <div className={styles.agentName}>{rec.name}</div>
                                <div className={styles.agentAgency}>{rec.agency}</div>
                                <div className={styles.agentRating}>
                                    {rec.rate}</div>
                                <div className={styles.agentListing}>{rec.listings}</div>
                            </div>
                        </div>
                    </div>
                    </div>

                )
              })
            }
    </>
}