import { useState } from "react";
import styled from "styled-components";


const Content = () =>{
    const [login, setLogin] = useState(false)
    return (
    
        <LandingContainer>
            <LoginContainer>
                <LogTitle>
                {!login && <h3>Register</h3>}
                {login && <h3>Login</h3>}
                </LogTitle>

                <LogIn>

                </LogIn>

                <Options>
                    {!login && <LogButton onClick={()=> setLogin("login")}>Register</LogButton>}
                    {login && <LogButton onClick={()=> setLogin(!login)}>Login</LogButton>}

                </Options>
            </LoginContainer>
        </LandingContainer>

    )
    
}

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: solid 1px green;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 50vh;
    border: solid 1px blue;
    border-radius: 1vw;
`
    const LogTitle = styled.div`
        display: flex;
        width: 100%;
        height: 20%;
        /* border-top-left-radius: 1vw;
        border-top-right-radius: 1vw; */
        border: 1px green solid;
        justify-content: center;
        align-items: center;
    `
    const LogIn = styled.div`
        width: 100%;
        height: 60%;
        border: 1px solid red;
    `
    const Options = styled.div`
        display: flex;
        width: 100%;
        height: 20%;
        border: 1px solid yellow;
        justify-content: center;
        align-items: center;
    `
    const LogButton = styled.button`
        width: 100px;
        height: 30px;
    `

export default Content;