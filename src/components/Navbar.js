import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "../assets/user/logo.svg";

const Nav = styled.nav`
  padding: 20px 100px;
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

  &.active {
    color: #0053ad;
  }
`;

const Navbrand = styled(Link)`
  margin-top: 64px;
`;

const NavBrand = () => {
  return (
    <Nav style={{ paddingBottom: "0px" }}>
      <Navbrand to="/">
        <img src={logo}></img>
      </Navbrand>
    </Nav>
  );
};

const Navbar = () => {
  return (
    <>
      <NavBrand />
      <Nav
        style={{
          background: "white",
          position: "sticky",
          top: "0",
          zIndex: "5",
        }}
      >
        <NavMenu>
          <NavLink to="/tripDalamNegeri">Trip Dalam Negeri</NavLink>
          <NavLink to="/tripLuarNegeri">Trip Luar Negeri</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/tentangKami">Tentang Kami</NavLink>
          <NavLink to="/bergabungMenjadiAgen">Bergabung Menjadi Agen</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
