import styled from "styled-components";


const CardCont = styled.div`
    display:flex;
    width: 295px;
    height: 85px;
    background-color:white;
    border-radius:20px;
    align-items:center;
    color:black;
    filter: drop-shadow(10px 4px 4px #949494)
    
`;

export default function FavCard({
    pricetxt="$3,000,000",
    location="Angus Dr Vancouver, BC"
}) {
   

    return ( <CardCont>
        <img src="house.png" style={{width:58, height:58, borderRadius:10, marginLeft:15}}/>
        <div style={{marginLeft:15}}>
             <h6>{pricetxt}</h6>
             <h6 style={{marginTop:-20}}>{location}</h6>
        </div>
       
    </CardCont>

    )
}