import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { tokenLogin } from "../utils/index";

// pages import
import { Header } from "./Header";
import { Navbar } from "../components/navbar";
import { Movieresults } from "../components/movieresult";
import { Footer } from "./Footer";
// styles
import styled from "styled-components";
import "../globalStyles/global.css"
const { REACT_APP_API_KEY } = process.env

export const SearchApi = ({user, setUser}) =>{
    const [movie, setMovie ] = useState([])
    const [search, setSearch] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        document.title = "HMD | Search";
      }, []);
    
      if (!user && !localStorage.key("myToken")) {
        <Navigate to="/" />;
      } else if (!user && localStorage.key("myToken")) {
        tokenLogin(setUser);
      }

    const MovieApi = async () =>{
        try {     
            const response = await fetch(`${REACT_APP_API_KEY}${search}`);
            const data = await response.json();
            console.log(data)
            setMovie(data.results)
            } catch(errorLog){
                console.log(errorLog)
            }
        };
        
        const submitHandler = (e) => {
            e.preventDefault();
            MovieApi()
        };


    return(
        <>
        {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
        {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
        <PageContainer>
        <Header user={user}/>
        <Navbar setUser={setUser}/>
        <DivSearch>
            <FormSearch onSubmit={submitHandler }>
                <InputSearch placeholder="Search Movie Api" type="search" onChange={(e)=> setSearch(e.target.value)} />
                <ButtonSearch>Search DB</ButtonSearch>
            </FormSearch>
            {/* <MoviesList /> */}
            <Movieresults movie={movie} />
        </DivSearch>
        
        </PageContainer>
        </>

    )
};


// #######################################################
// style componants

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
`

const DivSearch = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border: solid 1px green; */

`

const FormSearch = styled.form`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 10vh;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
    /* border: solid 1px green; */

`
const InputSearch = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 10px;
    font-size: 25px;
    text-align: center;
`

const ButtonSearch = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin-left: 1vw;
`
