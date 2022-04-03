import { useEffect } from "react";
import { Navigate } from "react-router-dom";

// Pages
import { Header } from "./Header";
import { Footer } from "./Footer";

// Componantas
import { Navbar } from "../components/navbar";

//  Utils
import { tokenLogin } from "../utils/index";

//  CSS
import styled from "styled-components";

export const Home = ({user, setUser}) =>{
    useEffect(() => {
        document.title = "HMD | Home";
      }, []);
    
    return (
        <>
            {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
            {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
            <Header user={user} />
            <Navbar setUser={setUser}/>
            <HomeContentDiv>
            <h2>Welcome to the Home Movie Database</h2>
            <p>This site is designed for the purpose of searching for films to see if you have them in your own collection and if not being able to add them to a database list. </p>
            </HomeContentDiv>
            <Footer />
        </>

    )

}


const HomeContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 75vh;
    align-items: center;

`