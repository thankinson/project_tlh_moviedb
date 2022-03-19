import { MovieApi } from "../components/api";
import styled from "styled-components";
import { useState } from "react";

export const SearchApi = () =>{
    const [search, setSearch] = useState([])
    
    const submitHandler = (e) =>{
        e.preventDefault();
        MovieApi(search)
        
    } 
    
    return(
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="Search Movie Api" type="search" onChange={(e)=> setSearch(e.target.value)} />
                <button>Search DB</button>
            </form>

        </>

    )
}