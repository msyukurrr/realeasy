import AgentListing from "../components/Agent";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Heading from "../components/Heading";

export default function FindAnAgent(){
    return(
        <>
        <Heading color="#5AA1FD" ></Heading>

        <div style={{marginTop:50}}>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        </div>
       



        <NavBar></NavBar>
        </>
    )
}