import { useState } from "react";

import { NavLink } from "react-router-dom"

// functions
import { logout } from "../utils";
// CSS
import styled from "styled-components";
import "../globalStyles/global.css"

// Content
export const Navbar = ({setUser}) => {

    const [showNav, setShowNav] = useState(false)

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
      
    )

    const PageLinksMobile = () => (
        <>
        {pageLinks.map((link, index) =>(
            
                <StyledNavLinkMobile key={index} to={link.to} onClick={link.onClick} > 
                    {link.lable} 
                </StyledNavLinkMobile> 
                
             ))}
        </>
      
    )

    return (
        <>
            <NavbarContainer showNav={showNav}>
            
            <BurgerMenue onClick={() => {
                    setShowNav((curr) => !curr)
                    }}
                    >
                       {showNav ? <> &#9781; </> : <> &#8801; </> }
                </BurgerMenue>
                {!showNav && <PageTitle><h3>Home Movie Database</h3></PageTitle>}
            <NavbarLinks>
             <PageLinks />

             </NavbarLinks>

            {showNav && <NavSmallContainer>
                 <PageLinksMobile />

             </NavSmallContainer>}
           </NavbarContainer>
        </>
    )

}

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* height: 5vh; */
    height: ${(props) => (props.showNav ? "150px" : "5vh")};
    background-color: #232323;
    align-items: center;

    @media (max-width: 700px){
        min-height: 50px;
        max-height: 100px;
        /* justify-content: center;
        align-items: center; */
        
    }
`;

    const NavbarLinks = styled(NavbarContainer)`
    justify-content: center;
    `;

    const NaveTextContainer = styled.div`
        display: flex;
        width: 10vw;
        /* height: 4vh; */
        justify-content: center;
        align-items: center;

        @media (max-width: 700px){
            display: none;
        }

    `
    const StyledNavLink = styled(NavLink)`
        display: flex;
        width: 9vw;
        /* height: 4vh; */
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        color: white;
        background-color: #393939;
        border-top:solid 1px #707070;
        border-left:solid 1px #707070;
        border-right:solid 1px #707070;
        &.active {
            background-color: #131516;
        };
        border-top-left-radius: 1vw;
        border-top-right-radius: 1vw;
    `
        const StyledNavLinkMobile = styled(NavLink)`
            display: flex;
            width: 80vw;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.25rem;
            color: white;
            /* justify-content: center;
            align-items: center; */
        `
    const BurgerMenue = styled.button`
        width: 70px;
        height: 50px;
        background: none;
        border: none;
        color: white;
        font-size: 45px;
        cursor: pointer;

        @media (min-width: 700px){
            display: none;
        }
    `
    const NavSmallContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 700px){
            display: none;
        }
    `

    const PageTitle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (min-width: 700px){
            display: none;
        }
    `