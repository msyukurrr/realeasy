import styled from "styled-components";

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
    width:280px;
    height:55px;
    margin-top:120px;
    border-radius:20px;
    color:black;
    flex-direction:column;
`


export default function ListCard({
    img="house.png",
    price="$100",
    city="Vancouver, BC"
    
}) {

    
    
    return ( <CardCont>
        <img src={img} style={{borderRadius:20, width:280}}/>
        <TextCont>
            <h4 style={{marginTop:8, marginLeft:20}}>{price}</h4>
            <p style={{marginTop:-18, marginLeft:20}}>{city}</p>
        </TextCont>
    </CardCont>

    )
}