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

// images
import SearchImg from "../assets/searchbar.png"
import FoundMovie from "../assets/foundmovie.png"

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
                    <p>The Home Movie Database is designed to be used as your personal movie collection database. </p>
                    <p>Search The Movie Database API for a film you want to add to your collection. </p>
                    <ImagesSettings src={SearchImg} alt="search bar " />
                    <p>Simply Click on the film you have searched for and click Add and it will be stored in your collection</p>
                    <ImagesSettings src={ FoundMovie } alt="drop down window" />
                    <p>To View your movies open the "My Movies" tab and scroll through your films</p>
                </AboutSiteInfo>
            </AboutContaciner>
            </HomeContentDiv>
            <Footer />
        </PageContainer>

    )

}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    @media (max-width: 700px){
        height: 100%;
    }
`
const HomeContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    align-items: center;
`
const AboutContaciner = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 700px){
        width: 90%;
    }
`
const AboutSiteTitle = styled.div`
    width: 100%;
    text-align: center;
`
const AboutSiteInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    
`
const ImagesSettings = styled.img`
    max-width: 500px;

    @media (max-width: 700px){
    width: 300px;
    }
`

// const HyperLink = styled.a`
//     text-decoration: none;
//     text-decoration-line: underline;
//     color: white;
// `

// <p>Welcome to my Site</p>
// <p>This site is designed for the purpose of: 
//     <ul>
//         <li>To keep track of Films in your DVD/Blu-Ray/Didgital Collection</li>
//         <li>To add films to your collection</li>
//         <li>Portfolio project</li>
//     </ul>
//      </p>
//      <p>To build this site i am useing<br />
//      &nbsp;&nbsp;Frontend: 
//          <ul>
//              <li>React</li>
//              <li>React-Router-Dom</li>
//              <li>Styled-Componats</li>
//              <li>The Movie Database API: <HyperLink href="https://developers.themoviedb.org/3/movies/get-movie-details" target="_blank" rel="noreferrer noopener">Click here to visit site</HyperLink></li>
//          </ul>
//         &nbsp;&nbsp;Backend:
//             <ul>
//                 <li>Express</li>
//                 <li>Jsonwebtoken</li>
//                 <li>Bcryptjs</li>
//                 <li>Dotenv</li>
//                 <li>Cors</li>
//                 <li>Mongoose</li>
//             </ul>
//      </p>