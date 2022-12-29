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
          background: "none",
          height: "100%",
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
        <NavLink onClick={handleLogout}>Keluar</NavLink>
      </Sider>
    </>
  );
};

export default NavbarAdm;
