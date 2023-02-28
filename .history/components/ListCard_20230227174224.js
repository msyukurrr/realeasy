import styled from "styled-components";
import Link from "next/link";

const CardCont = styled.div`
    display:flex;
    justify-content: center;
    width:305px;
    height:168px;
    
    

`;

const TextCont = styled.div`
    display:flex;
    position:absolute;
    background-color:white;
    z-index:1;
    width:80%;
    height:20%;
    margin-top:120px;
    border-radius:20px;
    color:black;
    flex-direction:column;
`


export default function ListCard({
    property: {
        coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVarified, externalID, location, name
    }
    
}) {

    
    
    return ( <Link href={`/property/${externalId}`} passHref >
    
        <CardCont>

            <Image src={coverPhoto} alt="img" width={100}/>
            
            <TextCont>
                <h4 style={{marginTop:8, marginLeft:20}}>{title}</h4>
                <p style={{marginTop:-18, marginLeft:20}}>${price}</p>
            </TextCont>
        </CardCont>
          
    </Link>
    
    
  
    )
}