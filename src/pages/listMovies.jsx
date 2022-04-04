
import { useState, useEffect } from "react";
import { tokenLogin } from "../utils";
import { Navigate } from "react-router-dom";

// Pages
import { Header } from "./Header";
import { Footer } from "./Footer";

// Componantas
import { Navbar } from "../components/navbar";
import { ListAll } from "../components/mymovies";

// Styled componants
import styled from "styled-components";

const dbConnection = process.env.REACT_APP_REST_API

export const MoviesList = ({user, setUser}) => {


    useEffect(() => {
        document.title = "HMD | My collection";
    }, []);

    return (
        
          <PageContainer>  
                {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
                {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
            <Header user={user} />
            <Navbar setUser={setUser}/>
            <PageContent>
                  <ListAll />
            </PageContent>
     
          </PageContainer>
      

    )

};

// Styled Componants

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
`
const PageContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`