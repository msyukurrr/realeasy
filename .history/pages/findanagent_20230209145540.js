import AgentListing from "../components/Agent";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Heading from "../components/Heading";

export default function FindAnAgent(){
    return(
        <>
        <Heading color="#5AA1FD" style={{paddingBottom:10}}></Heading>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>
        <AgentListing></AgentListing>



        <NavBar></NavBar>
        </>
    )
}