import { useState, useEffect  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./components/login";
import { SearchApi } from "./pages/search";
import { tokenLogin } from './utils';
// import styled from "styled-components";

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        if (localStorage.key("myToken")) {
          tokenLogin(setUser);
        }
      }, []);

    return (

                    <BrowserRouter>
                        <Routes>
         
                            <Route path="/" element={<Login user={user} setUser={setUser} />} />

                            <Route path="/home" element={<Home user={user} setUser={setUser}/>} />

                            <Route path="/search" element={<SearchApi user={user} setUser={setUser}/>} />

                        </Routes>
                    </BrowserRouter>
    

);

};

// ##########################################################
// styled componebts here

// const BodyDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100vw;
//     height: 100vw; 
// `

// const AppContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100vw;
//     height: 38%;
//     justify-content: center;
//     align-items: center;
   
// `
export default App;
