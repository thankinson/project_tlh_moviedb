import React from "react";
import styled from "styled-components";

export const Footer = () =>{
    return (
        <FooterDiv>
            <h4>  Tom Hankinson || Personal Project || API provided by <HyperLink href="https://www.themoviedb.org/"> The Movie Database</HyperLink></h4>
        </FooterDiv>

    );
};

// ##########################################################
// styled componebts here
const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 0;
    height: 5vh;
    width: 100%;

  @media (max-width: 700px){
    display: none;
  };
`;
const HyperLink = styled.a`
    text-decoration: none;
    text-decoration-line: underline;
    color: white;
`;



