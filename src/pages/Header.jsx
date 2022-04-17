import React from "react";
import styled from "styled-components";

export const Header =({user})=>{
    return (
      <>
          <Banner>
            <SpaceDiv></SpaceDiv>
            <TitleDiv>
            <Title>Home Movie Database</Title>
            </TitleDiv>
            {user &&<SpaceDiv>
                {/* <p>{user} is logged in</p> */}
            </SpaceDiv>}
          </Banner>
         
        </>
        
    );
};

const Title = styled.h1`
  text-shadow: 2px 2px rgb(128, 128, 128);
`
const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  width: 100vw;

  @media (max-width: 700px){
    display: none;
  };
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
`;
const SpaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 10vh;
`;

