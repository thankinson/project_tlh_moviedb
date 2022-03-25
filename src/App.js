import { useState, useEffect } from "react";
import {Header}  from "./pages/Header";
import { Footer } from "./pages/Footer";
import { Login } from "./components/login";
import { SearchApi } from "./pages/search";
import { Landing } from "./pages/landing";
// import { MoviesList } from "./pages/listMovies"
import { tokenLogin } from './utils';
import styled from "styled-components";
import './globalStyles/global.css';

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        if (localStorage.key("myToken")) {
          tokenLogin(setUser);
        }
      }, []);

    return (
        <Body>
            <Header user={user} />
            
                <AppContainer>
                    {!user ? <Login setUser={setUser} /> : <SearchApi /> }
         
                </AppContainer>
            <Footer />
        </Body>

);

};

// ##########################################################
// styled componebts here
const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;
const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
export default App;
