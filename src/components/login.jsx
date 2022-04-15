import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createUser, login } from "../utils";
import styled from "styled-components";

export const Login = ({user, setUser}) =>{
    const [userName, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false)
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        if (bool) {
            login(userName, pass, setUser)
        } else {
            if (email.includes("@")) {
                createUser(userName, email, pass, setUser)
            }
        }
    }

    return (
            <PageContainer>
            {user && <Navigate to="/home" />}
            <LoginContainer>
                {user && <Navigate to="/home" />}
                <h3>
                    {!bool 
                        ? "Register" 
                        : "Login"
                    }
                </h3>               

                <LogIn>
                     <LoginForm onSubmit={ submitHandler }>
                        <TextInput placeholder="Enter User Name" type="text" onChange={(e)=> setUsername(e.target.value) }/>
                        {!bool && <TextInput placeholder="Enter E-mail" type="email" onChange={(e)=> setEmail(e.target.value) } />}
                        <TextInput placeholder="Enter Password" type="password" onChange={(e)=> setPass(e.target.value)}/>
                        <LogButton>{!bool ? "Register" : "Login"}</LogButton>
                    </LoginForm>
                </LogIn>

                    <LogButton onClick={()=> setBool(!bool)}>
                        {!bool 
                        ? "Already Hav Account? Click Here" 
                        : "No account? Click Here" 
                        }
                    </LogButton>
                    

            </LoginContainer>
        </PageContainer>

    )
    
}

// ##########################################################
// styled componebts here

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 20vw;
    height: 50vh;
    border-radius: 1vw;
    border: solid 1px;
    background-color: #000000;
   `
    const LogIn = styled.div`
        width: 20vw;
        height: 30vh;
    `
    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        min-width: 20vw;
        min-height: 30vh;
    `
    const LogButton = styled.button`
        width: 14vw;
        height: 4vh;
        text-align: center;
        border-radius: 10px;
        border: solid 1px rgb(58, 58, 58);
        background-color: #131516f6;
        color: aliceblue;
    `
    const TextInput = styled.input`
        width: 14vw;
        height: 4vh;
        text-align: center;
        border-radius: 10px;
        border: solid 1px rgb(58, 58, 58);
        background-color: #131516f6;
        color: aliceblue;
    `
