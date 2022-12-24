import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "../assets/user/logo.svg";
import { Layout } from "antd";

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
  return (
    <>
      <Sider style={{ background: "#F5F7FA", height: "100vh" }}>
        <img src={logo} width="120px" />
        <NavLink to="/beranda">Beranda</NavLink>
        <NavLink to="/paketWisata">Paket Wisata</NavLink>
        <NavLink to="/portofolio">Portofolio</NavLink>
        <NavLink to="/profilSaya">Profil Saya</NavLink>
        <NavLink to="/akunSaya">Akun Saya</NavLink>
        <NavLink to="/premium">Premium</NavLink>
        <NavLink to="/keluar">Keluar</NavLink>
      </Sider>
    </>
  );
};

export default NavbarAdm;
