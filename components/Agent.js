import styled from "styled-components";
import record from '../data/agent.json'
import styles from '../styles/Home.module.css'

const Container = styled.div`
display: flex;
justify-content: center;
`

const Image = styled.img`
height: 80px;
width: 80px;
border-radius: 20px;
display: flex;
margin-left: 15px;
margin-top: 10px;
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
                    <div key={index} className={styles.agentCont}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:30, marginLeft:20}}>
                        <div className={styles.agentName}>{rec.name}</div>
                        <div className={styles.agentAgency}>{rec.agency}</div>
                        </div>
                    </div>

                )
              })
            }
    </>
}