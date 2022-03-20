import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import "../globalStyles/global.css"
const { REACT_APP_API_KEY } = process.env

export const SearchApi = () =>{
    const [movie, setMovie ] = useState()
    const [search, setSearch] = useState()
    
    const MovieApi = async () =>{
        try {     
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${search}`);
            const data = await response.json();
            console.log(data)
            setMovie(data.results)
            } catch(errorLog){
                console.log(errorLog)
            }
        }
 
        const submitHandler = (e) => {
            e.preventDefault();
            MovieApi()
        }

    return(
        <>
        <DivSearch>
            <FormSearch onSubmit={submitHandler }>
                <InputSearch placeholder="Search Movie Api" type="search" onChange={(e)=> setSearch(e.target.value)} />
                <ButtonSearch>Search DB</ButtonSearch>
            </FormSearch>
        <DivResults>
            {movie && movie.map((item, index) => 
                        <DivCollapse>
                            <Collapsible trigger={movie[index].original_title}>
                                <DivContent>
                                    <DivPoster><ImgPoster src={`https://image.tmdb.org/t/p/w500${movie[index].poster_path}`} /></DivPoster>
                                    <DivInformation>
                                    <p>Movie ID: {movie[index].id}</p>
                                    <p>Released: {movie[index].release_date}</p>
                                    <p>{movie[index].overview}</p>
                                    <p>Raiting: {movie[index].vote_average}</p>
                                    </DivInformation>
                                </DivContent>
                                                 
                            </Collapsible>
                        </DivCollapse>)}
          
            </DivResults>
        </DivSearch>
        </>

    )
}


// #######################################################
// style componants

const DivSearch = styled.div`
    width: 100vw;
    height: 95vh;
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
    border-radius: 50px;
    font-size: 25px;
    text-align: center;
`

const ButtonSearch = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 50px;
    margin-left: 1vw;
`
const DivResults = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    /* border: solid 1px red; */
`
const DivCollapse = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    /* border: solid 1px red; */
    margin-bottom: 1vh;
    margin-left: 1vw;
    font-size: 30px;
`
const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const DivPoster = styled.div`
    height: 450px;
    width: 300px;
    border: solid 1px blue;
`

const ImgPoster = styled.img`
    max-width: 300px;
`
const DivInformation = styled.div`
    width: 30vw;
    padding-left: 1vw;
    font-size: 20px;
`
