import styled from "styled-components";
import { Container } from "../../globalStyles";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999; //this goes above everything else
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  /* font-family: "Rozha One", serif; */
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  font-family: "Rozha One", serif;
`;
