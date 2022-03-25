import { useState } from "react";
import styled from "styled-components";
import { Movieresults } from "../components/movieresult";
// import { MoviesList } from "./listMovies"
import "../globalStyles/global.css"
const { REACT_APP_API_KEY } = process.env

export const SearchApi = () =>{
    const [movie, setMovie ] = useState([])
    const [search, setSearch] = useState()
    
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
        <DivSearch>
            <FormSearch onSubmit={submitHandler }>
                <InputSearch placeholder="Search Movie Api" type="search" onChange={(e)=> setSearch(e.target.value)} />
                <ButtonSearch>Search DB</ButtonSearch>
            </FormSearch>
            {/* <MoviesList /> */}
            <Movieresults movie={movie} />
        </DivSearch>
        </>

    )
};


// #######################################################
// style componants

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
