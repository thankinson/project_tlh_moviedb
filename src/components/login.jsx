import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import { createUser, login } from "../utils";
import styled from "styled-components";

export const Login = ({user, setUser}) =>{
    const [userName, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false);
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        if (bool) {
            login(userName, pass, setUser)
        } else {
            if (email.includes("@")) {
                createUser(userName, email, pass, setUser)
            }
        };
    };

    return (
            <PageContainer>
            {user && <Navigate to="/home" />}
            <LoginContainer>
                <h3>
                    {!bool 
                        ? "Register" 
                        : "Login"
                    }
                </h3>               

                     <LoginForm onSubmit={ submitHandler }>
                        <TextInput placeholder="Enter User Name" type="text" onChange={(e)=> setUsername(e.target.value) }/>
                        {!bool && <TextInput placeholder="Enter E-mail" type="email" onChange={(e)=> setEmail(e.target.value) } />}
                        <TextInput placeholder="Enter Password" type="password" onChange={(e)=> setPass(e.target.value)}/>
                        <LogButton>{!bool ? "Register" : "Login"}</LogButton>
                    </LoginForm>
            

                    <LogButton onClick={()=> setBool(!bool)}>
                        {!bool 
                        ? "Already Have Account? Click Here" 
                        : "No account? Click Here" 
                        }
                    </LogButton>
                    
            </LoginContainer>
        </PageContainer>

    );
    
};

// ##########################################################
// styled componebts here

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media (max-width: 1080px){
        justify-content: center;
    };
    @media (max-width: 810px){
        justify-content: center;
    };
    @media (max-width: 700px){
        justify-content: flex-start;

    };
`;
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
    
    @media (max-width: 1100px){
        width: 320px;
        border-radius: 10px;
        min-height: 400px;
        margin-top: 10px;
    };
    @media (max-width: 850px){
        justify-content: flex-start;
        width: 320px;
        border-radius: 10px;
        height: 450px;
        margin-top: 10px;
    };
    @media (max-width: 810px){
        justify-content: flex-start;
        width: 320px;
        border-radius: 10px;
        height: 450px;
        margin-top: 10px;
    };
    @media (max-width: 700px){
        width: 320px;
        border-radius: 10px;
        min-height: 400px;
        margin-top: 10px;
    };
    `;
    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 20vw;
        height: 30vh;
        border: solid 1px red;

        @media (max-width: 1100px){
        width: 100%;
        height: 70%;
        };
        @media (max-width: 850px){
        width: 100%;
        height: 70%;
        };
        @media (max-width: 810px){
            width: 100%;
            height: 70%;
        };
        @media (max-width: 700px){
        width: 100%;
        height: 70%;
        };
    `;
    const LogButton = styled.button`
        width: 14vw;
        height: 4vh;
        text-align: center;
        border-radius: 10px;
        border: solid 1px rgb(58, 58, 58);
        background-color: #131516f6;
        color: aliceblue;
       
        @media (max-width: 1100px){
        width: 90%;
        height: 40px;
    };
        @media (max-width: 700px){
        width: 80%;
        height: 40px;
    };
    `;
    const TextInput = styled.input`
        width: 14vw;
        height: 4vh;
        text-align: center;
        border-radius: 10px;
        border: solid 1px rgb(58, 58, 58);
        background-color: #131516f6;
        color: aliceblue;

        @media (max-width: 1100px){
        width: 90%;
        height: 40px;
    };
        @media (max-width: 700px){
        width: 80%;
        height: 40px;
    };
    `;
