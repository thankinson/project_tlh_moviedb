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
        {pageLinks.map(link =>(<li> <NavLink to={link.to} onClick={link.onClick} > {link.lable} </NavLink> </li> ))}
        </>
      
    )
    return (
        <>
            <nav>
            <ul>
             <PageLinks />
            </ul>
           </nav>
        </>
    )

}



