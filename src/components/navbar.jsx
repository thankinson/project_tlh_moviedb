import { React, useState } from "react";

import { NavLink } from "react-router-dom";

// functions
import { logout } from "../utils";
// CSS
import styled from "styled-components";
import "../globalStyles/global.css";

// Content
export const Navbar = ({setUser}) => {

    const [showNav, setShowNav] = useState(false);

    const pageLinks = [{
        to: "/home",
        lable: "Home"
    },
    {
        to: "/search",
        lable: "Search"
    },
    {
        to: "/list",
        lable: "My Movies"
    },
    {
        to: "/",
        lable: "Logout",
        onClick: () => logout(setUser={setUser})
    }];

    const PageLinks = () => (
        <>
        {pageLinks.map((link, index) =>(<NaveTextContainer key={index}> <StyledNavLink to={link.to} onClick={link.onClick} > {link.lable} </StyledNavLink> </NaveTextContainer> ))}
        </>
      
    );

    const PageLinksMobile = () => (
        <>
        {pageLinks.map((link, index) =>(
            
                <StyledNavLinkMobile key={index} to={link.to} onClick={link.onClick} > 
                    {link.lable} 
                </StyledNavLinkMobile> 
                
             ))}
        </>
      
    );

    return (
        <>
            <NavbarContainer showNav={showNav}>
                <BurgerMenueDiv>
                    <BurgerMenue onClick={() => {
                        setShowNav((curr) => !curr)
                        }}
                        >
                        <> &#8801; </>
                    </BurgerMenue>
                    <PageTitle><h3>Home Movie Database</h3></PageTitle>
                    <BurgerMenue></BurgerMenue>
                </BurgerMenueDiv>
                
            <NavbarLinks>
             <PageLinks />

             </NavbarLinks>

            {showNav && <NavSmallContainer>
                 <PageLinksMobile />

             </NavSmallContainer>}
           </NavbarContainer>
        </>
    )

};

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: ${(props) => (props.showNav ? "35vh" : "5vh")};
    background-color: #222831;
    align-items: center;

    @media (max-width: 700px){
        min-height: 50px;
        flex-direction: column;
    };
`;
    const NavbarLinks = styled(NavbarContainer)`
    justify-content: center;

        @media (max-width: 700px){
            display: none;
        };
    `;
    const NaveTextContainer = styled.div`
        display: flex;
        width: 120px;
        justify-content: center;
        align-items: center;

        @media (max-width: 970px){
            width: 120px;
        }
        @media (max-width: 700px){
            display: none;
        };
    `;
    const StyledNavLink = styled(NavLink)`
        display: flex;
        width: 100%;
        height: 5vh;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        color: white;
        background-color: #222831;
        &.active {
            background-color: #131516;
            &:hover{
                background-color: #1a1e24;
            };
        };
        &:hover{
            background-color:#495568;
        };
    `;
    const StyledNavLinkMobile = styled(NavLink)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        color: white;
        background-color: #181a1b;
        box-shadow: 0px 0px 1px 0px ;
        width: 90%;
        height: 40px;
        margin-bottom: 10px;
    `;

const BurgerMenueDiv = styled.div`
    @media (max-width: 700px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100vw;
    };
`;
const BurgerMenue = styled.button`
    width: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px){
        display: none;
    };
`;
const PageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    font-size: 15px;

    @media (min-width: 700px){
        display: none;
    };
`;
const NavSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;

    @media (min-width: 700px){
        display: none;
    };
`;

