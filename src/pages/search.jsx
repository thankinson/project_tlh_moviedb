import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { tokenLogin } from "../utils/index";

// pages import
import { Header } from "./Header";
import { Navbar } from "../components/navbar";
import { Movieresults } from "../components/movieresult";

// styles
import styled from "styled-components";
import "../globalStyles/global.css"
const { REACT_APP_API_KEY } = process.env
const dbConnection = process.env.REACT_APP_REST_API

// main code
export const SearchApi = ({user, setUser}) =>{
    const [movie, setMovie ] = useState([]);
    const [search, setSearch] = useState();
    const [checkMovie, setCheckMovie] = useState([]);
    const [idArray, setIdArray] = useState([])

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
                console.log(data);
                setMovie(data.results);
                } catch(errorLog){
                    console.log(errorLog);
                }
            };

        useEffect(()=> {
            const MyCollection = async () => {
                try {     
                    const response = await fetch(`${dbConnection}movie`);
                    const data = await response.json();
                    console.log(data.allMovie);
                    setCheckMovie(data.allMovie);
                    } catch(errorLog){
                        console.log(errorLog);
                    };       
                };
             MyCollection();

        }, []); 

        const CheckArray = () =>{
            for ( let i = 0; i < checkMovie.length; i++ ){
                setIdArray(idArray => [...idArray, checkMovie[i].tmdbId]);
            };        
            };
             
        const submitHandler = (e) => {
            e.preventDefault();
            CheckArray();
            MovieApi();
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
            <Movieresults movie={movie} idArray={idArray} setIdArray={setIdArray}/>
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
    background-color:  #202324;
    color: white;
`

const ButtonSearch = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin-left: 1vw;
    background-color:  #202324;
    color: white;
`
