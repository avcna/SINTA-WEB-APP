import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { useEffect } from "react";
import { Dashboard, Info } from "../components/AgentComponents";
import styled from "styled-components";

const { Content } = Layout;

const Button = styled.button`
  background: #0053ad;
  border-radius: 50px;
  padding: 16px 24px;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  border: none;
`;
const PaketWisata = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  return (
    <>
      <Layout style={{ background: "none" }}>
        <NavbarAdm />
        <Content style={{ margin: "24px 40px" }}>
          <Dashboard>Dashboard Agen</Dashboard>
          <Info>Halo, Selamat datang di task management dashboard agen</Info>
          <Dashboard>Tambah Paket Wisata</Dashboard>
          <Info>
            Jika anda ingin menambah paket wisata, silahkan klik tombol “Publish
            Sekarang” dibawah ini
          </Info>
          <Button>Publish Sekarang</Button>
        </Content>
      </Layout>
    </>
  );
};

export default PaketWisata;
