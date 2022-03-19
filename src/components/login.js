import { useState } from "react";
import styled from "styled-components";

export const Login = ({user, setUser}) =>{
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false)
    
    const submitHandler = (e) => {
        e.preventdefault();
        
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
                        <LogButton>Register</LogButton>
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
    border: solid 0.1vw blue;
    
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
        width: 250px;
        height: 30px;
    `
    const TextInput = styled.input`
        width: 250px;
        height: 30px;
    `
