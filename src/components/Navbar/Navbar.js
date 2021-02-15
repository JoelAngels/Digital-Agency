import React from "react";
import { Nav, NavbarContainer, NavLogo, NavIcon } from "./Navbar.Elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to ="/">
                <NavIcon/>
                Angels
            </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
