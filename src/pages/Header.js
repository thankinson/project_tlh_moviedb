import styled from "styled-components";

const Header =()=>{
    return (
        <Banner>
       
          <Title>Home Movie Database</Title>
     
        </Banner>
    );
};

const Title = styled.h1`
  text-shadow: 2px 2px rgb(128, 128, 128);
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  padding-left: 10px;
  padding-right: 10px;
  background-color: goldenrod;
  box-shadow: 0px 0px 10px 0px;
`;
export default Header;