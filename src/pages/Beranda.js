import NavbarAdm from "../components/NavbarAdm";
import { Col, Layout, Row } from "antd";
import { Dashboard, Info, Wrapper } from "../components/AgentComponents";
import { useEffect } from "react";
import Card from "../components/Card";

const { Sider, Content } = Layout;

const Beranda = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  const pageValue = "beranda";
  return (
    <>
      <Layout
        style={{
          background: "none",
        }}
      >
        <NavbarAdm />
        <Content>
          <Wrapper>
            <Dashboard>Dashboard Agen</Dashboard>
            <Info>Halo, Selamat datang di task management dashboard agen</Info>

            <Dashboard>Paket Wisata</Dashboard>
            <Row>
              <Col span={6}>
                <Card />
              </Col>
              <Col span={6}>
                <Card />
              </Col>
              <Col span={6}>
                <Card />
              </Col>
              <Col span={6}>
                <Card />
              </Col>
            </Row>

            <Dashboard>Portofolio</Dashboard>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default Beranda;
