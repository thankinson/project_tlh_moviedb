import { React ,useState, useEffect  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { tokenLogin } from './utils';

// Pages
import { Home } from "./pages/Home";
import { SearchApi } from "./pages/search";
import { MoviesList } from "./pages/listMovies";

//componatns 
import { Login } from "./components/login";

// css
import "./globalStyles/global.css";

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

                            <Route path="/home" element={<Home user={user} setUser={setUser} />} />

                            <Route path="/search" element={<SearchApi user={user} setUser={setUser} />} />

                            <Route path="/list" element={< MoviesList user={user} setUser={setUser} />} />

                        </Routes>
                    </BrowserRouter>
    
);

};

export default App;
