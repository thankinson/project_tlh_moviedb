import { useState } from "react";
import Header from "./pages/Header";
import  { Landing } from "./pages/Landing"
import Footer from "./pages/Footer";
import styled from "styled-components";
import './globalStyles/global.css';

const App = () => {
    const [user, setUser] = useState();
    return (
        <Body>
            <Header />
            <Landing user={user} setuser={setUser}  />
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

export default App;
