import styled from "styled-components";

export const Footer = () =>{
    return (
        <FooterDiv>
            <h4> Personal Project || Tom Hankinson </h4>
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
    
    /* background-color: rgb(51, 51, 61);
    box-shadow: 0px 0px 10px 0px white; */
`;

