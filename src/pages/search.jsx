import { React, useState, useEffect } from "react";
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

    useEffect(() => {
        document.title = "HMD | Search";
      }, []);
    
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

        const submitHandler = (e) => {
            e.preventDefault();
            MovieApi();
            };

    return(
        <>
        {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
        {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
        <PageContainer>
        <Header user={user}/>
        <Navbar setUser={setUser} />
        <DivSearch>
            <FormSearch onSubmit={submitHandler }>
                <InputSearch placeholder={`Search Movies here `} type="search" onChange={(e)=> setSearch(e.target.value)} />
                <ButtonSearch>Search DB</ButtonSearch>
            </FormSearch>
            <Movieresults movie={movie} checkMovie={checkMovie} setCheckMovie={setCheckMovie}/* idArray={idArray} setIdArray={setIdArray} */ />
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

    @media (max-width: 700px){
        height: 100%;
    }
`;
const DivSearch = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px){
        height: 100%;
    }
`;
const FormSearch = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
`;
const InputSearch = styled.input`
    width: 39%;
    height: 50px;
    border-radius: 3px;
    border: 1px #5c5c5c solid;
    font-size: 25px;
    text-align: center;
    background-color:  #222831;
    color: #ffffff;
    margin-bottom: 10px;

    @media (max-width: 700px){
        width: 90vw;
        height: 5vh;
    };
`;
const ButtonSearch = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 2px;
    margin-left: 1vw;
    border: 1px #5c5c5c solid;
    background-color:  #15191f;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #495568;
        border: 1px #a4a4a4 solid;
    };

    @media (max-width: 700px){
      display: none;
    };
`;
