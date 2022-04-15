import { NavLink } from "react-router-dom"

// functions
import { logout } from "../utils";
// CSS
import styled from "styled-components";
import "../globalStyles/global.css"

// Content
export const Navbar = ({setUser}) => {

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
    return (
        <>
            <NavbarContainer>
            <NavbarLinks>
             <PageLinks />
             </NavbarLinks>
           </NavbarContainer>
        </>
    )

}

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5vh;
    background-color: #232323;
    align-items: flex-end;
`;

    const NavbarLinks = styled(NavbarContainer)`
    justify-content: center;
    `;

    const NaveTextContainer = styled.div`
        display: flex;
        width: 10vw;
        height: 4vh;
        justify-content: center;
        align-items: center;

    `
    const StyledNavLink = styled(NavLink)`
        display: flex;
        width: 9vw;
        height: 4vh;
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