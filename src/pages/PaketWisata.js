import { Col, Layout, Row } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { useEffect } from "react";
import {
  Dashboard,
  EmptyPaketwisata,
  EmptyPortofolio,
  Info,
  Wrapper,
} from "../components/AgentComponents";
import styled from "styled-components";
import Card from "../components/Card";
import FilterHarga from "../components/FilterHarga";

const { Sider, Content } = Layout;

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

// const Wrapper = styled.div`
//   padding: 32px 64px;
// `;
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
        <Content>
          <Wrapper>
            <Dashboard>Dashboard Agen</Dashboard>
            <Info>Halo, Selamat datang di task management dashboard agen</Info>
            <Dashboard>Tambah Paket Wisata</Dashboard>
            {/* <EmptyPortofolio /> */}
            <Info>
              Jika anda ingin menambah paket wisata, silahkan klik tombol
              “Publish Sekarang” dibawah ini
            </Info>
            <Button>Publish Sekarang</Button>

            {/* ------------------------------------batas------------------------------------ */}

            <Layout style={{ background: "none", marginTop: "48px" }}>
              <Sider
                width={257}
                style={{ background: "none", marginRight: "64px" }}
              >
                <Dashboard>Filter Paket Wisata</Dashboard>
                <FilterHarga />
              </Sider>
              <Content>
                <Dashboard>Semua Paket Wisata</Dashboard>
                <Row>
                  <Col span={12}>
                    <Card />
                  </Col>
                  <Col span={12}>
                    <Card />
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default PaketWisata;
