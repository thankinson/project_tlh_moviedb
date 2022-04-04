import { ListAll } from "../components/mymovies";
import { useState, useEffect } from "react";
import { tokenLogin } from "../utils";
import { Navigate } from "react-router-dom";
const dbConnection = process.env.REACT_APP_REST_API

export const MoviesList = ({user, setuser}) => {
const [list, setList] = useState([])

    const listMovie = async () => {
        
        try {     
            const response = await fetch(`${dbConnection}movie`);
            const data = await response.json();
            console.log(data)
            setList(data.allMovie)
            } catch(errorLog){
                console.log(errorLog)
            }
    
    };

    useEffect(() => {
        document.title = "HMD | My collection";
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();
        listMovie()
    };

    return (
        
          <>  
                {(!user && !localStorage.key('myToken')) && <Navigate to="/"/>}
                {(!user && localStorage.key('myToken')) && async function(setUser){ await tokenLogin(setUser) } }
            <form onSubmit={ submitHandler }>
                <button>cleck here</button>
            </form>
            <ListAll list={list}/>
          </>
      

    )

}