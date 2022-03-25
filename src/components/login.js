import { useState } from "react";
import { createUser, login } from "../utils";
import styled from "styled-components";

export const Login = ({setUser}) =>{
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
            <>
            <LoginContainer>
                <LogTitle>
                <h3>
                    {!bool 
                        ? "Register" 
                        : "Login"
                    }
                </h3>               
                </LogTitle>

                <LogIn>
                     <LoginForm onSubmit={ submitHandler }>
                        <TextInput placeholder="Enter User Name" type="text" onChange={(e)=> setUsername(e.target.value) }/>
                        {!bool && <TextInput placeholder="Enter E-mail" type="email" onChange={(e)=> setEmail(e.target.value) } />}
                        <TextInput placeholder="Enter Password" type="password" onChange={(e)=> setPass(e.target.value)}/>
                        <LogButton>{!bool ? "Register" : "Login"}</LogButton>
                    </LoginForm>
                </LogIn>

                <Options>
                    <LogButton onClick={()=> setBool(!bool)}>
                        {!bool 
                        ? "Already Hav Account? Click Here" 
                        : "No account? Click Here" 
                        }
                    </LogButton>
                    

                </Options>
            </LoginContainer>
        </>

    )
    
}

// ##########################################################
// styled componebts here
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb;
    width: 20vw;
    height: 50vh;
    border-radius: 1vw;
    background-color: #000000;
    box-shadow: 0px 0px 2px 1px white;
    
`
    const LogTitle = styled.div`
        display: flex;
        width: 100%;
        height: 20%;
        justify-content: center;
        align-items: center;
    `
    const LogIn = styled.div`
        width: 100%;
        height: 60%;
    `
    const Options = styled.div`
        display: flex;
        width: 100%;
        height: 20%;
        justify-content: center;
        align-items: center;
    `
    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
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
