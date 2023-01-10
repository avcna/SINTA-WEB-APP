import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "../assets/user/logo.svg";
import { Layout } from "antd";
import { useAuth } from "../config/Auth";

const { Sider } = Layout;

const NavLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
  padding: 16px 38px;
  text-decoration: none;
  display: block;

  &.active {
    background-color: #0053ad;
    color: white;
  }

  &:hover {
    color: #212121;
  }
`;

const NavbarAdm = () => {
  const { setAndGetTokens } = useAuth();
  const handleLogout = () => {
    setAndGetTokens();
    localStorage.clear();
  };
  return (
    <>
      <Sider
        style={{
          background: "white",
          height: "100%",
          position: "sticky",
          top: "0",
        }}
      >
        <span
          style={{
            display: "block",
            marginLeft: "40px",
            marginRight: "auto",
            width: "50%",
          }}
        >
          <Link to="/">
            <img src={logo} width="120px" />
          </Link>
        </span>

        <NavLink to="/beranda">Beranda</NavLink>
        <NavLink to="/paketWisata">Paket Wisata</NavLink>
        <NavLink to="/portofolio">Portofolio</NavLink>
        <NavLink to="/profilSaya">Profil Saya</NavLink>
        <NavLink to="/akunSaya">Akun Saya</NavLink>
        <NavLink to="/premium">Premium</NavLink>
        <Link
          style={{
            color: "#212121",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "28px",
            padding: "16px 38px",
            textDecoration: "none",
            display: "block",
          }}
          onClick={handleLogout}
        >
          Keluar
        </Link>
      </Sider>
    </>
  );
};

export default NavbarAdm;
