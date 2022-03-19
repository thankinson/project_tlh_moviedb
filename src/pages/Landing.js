import { useState } from "react";
import { Login } from "../components/login";
import { SearchApi } from "./search"
import styled from "styled-components";


export const Landing = () =>{
    const [user, setUser] = useState()
    
    return (
        // page container
        <LandingContainer>
  
             {user ? <Login /> : <SearchApi /> }
            {/* <MovieApi /> */}

        </LandingContainer>

    )
    
}

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: solid 1px green;
`;

