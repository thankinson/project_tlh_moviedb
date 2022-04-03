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
        to: "/user",
        lable: "My Movies"
    },
    {
        to: "/",
        lable: "Logout",
        onClick: () => logout(setUser={setUser})
    }];

    const PageLinks = () => (
        <>
        {pageLinks.map(link =>(<NaveTextContainer> <StyledNavLink to={link.to} onClick={link.onClick} > {link.lable} </StyledNavLink> </NaveTextContainer> ))}
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
`;

    const NavbarLinks = styled(NavbarContainer)`
    justify-content: center;
    `;

    const NaveTextContainer = styled.div`
        display: flex;
        width: 10vw;
        height: 5vh;
        justify-content: center;
        align-items: center;
    `
    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        color: white;
    `

