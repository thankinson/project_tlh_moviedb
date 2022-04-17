import { React, useEffect } from "react";
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

// images
import SearchImg from "../assets/searchbar.png";
import FoundMovie from "../assets/foundmovie.png";
import SearchMob from "../assets/searchbarMobile.png";
import FoundMob from "../assets/foundmovieMobile.png";
export const Home = ({user, setUser}) =>{
    useEffect(() => {
        document.title = "HMD | Home";
      }, []);
    
    return (
        <PageContainer>
            {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
            {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
            <Header user={user} />
            <Navbar setUser={setUser} />
            <HomeContentDiv>
            <AboutContaciner>
                <AboutSiteTitle>
                    <h2>Welcome to the Home movie Database</h2>
                </AboutSiteTitle>
                <AboutSiteInfo>
                    <PTagHiddenMob>The Home Movie Database is designed to be used as your personal movie collection database. </PTagHiddenMob>
                    <p>Search The Movie Database API for a film you want to add to your collection. </p>
                    <ImagesSettings src={SearchImg} alt="search bar " />
                    <ImagesSettingsMobile src={SearchMob} alt="search bar " />
                    <p>Simply Click on the film you have searched for and click Add and it will be stored in your collection</p>
                    <ImagesSettings src={ FoundMovie } alt="drop down window" />
                    <ImagesSettingsMobile src={FoundMob} alt="search bar " />
                    <p>To View your movies open the "My Movies" tab and scroll through your films</p>
                </AboutSiteInfo>
            </AboutContaciner>
            </HomeContentDiv>
            <Footer />
        </PageContainer>

    )

};

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    @media (max-width: 700px){
        height: 100%;
    };
`;
const HomeContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    align-items: center;
`;
const AboutContaciner = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 700px){
        width: 90%;
    };
`;
const AboutSiteTitle = styled.div`
    width: 100%;
    text-align: center;
`;
const AboutSiteInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center; 
`;
const ImagesSettings = styled.img`
    max-width: 500px;

    @media (max-width: 700px){
    display: none;
    };
`;
const ImagesSettingsMobile = styled.img`
    width: 60%;

    @media (min-width: 700px){
        display: none;
    };
`;
const PTagHiddenMob = styled.p`
    @media (max-width: 700px){
        display: none;
    };
`;
