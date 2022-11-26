import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  padding: 21px 100px;
`;

const NavMenu = styled.div``;

const NavLink = styled(Link)`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-align: left;
  margin-right: 48px;
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="">Trip Dalam Negeri</NavLink>
          <NavLink to="">Trip Luar Negeri</NavLink>
          <NavLink to="">FAQ</NavLink>
          <NavLink to="">Tentang Kami</NavLink>
          <NavLink to="">Bergabung Menjadi Agen</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
