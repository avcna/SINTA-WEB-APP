import NavbarAdm from "../components/NavbarAdm";
import { Col, Layout, Row } from "antd";
import {
  Dashboard,
  EmptyPaketwisata,
  EmptyPortofolio,
  Info,
  Wrapper,
} from "../components/AgentComponents";
import { useEffect } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { useAuth } from "../config/Auth";
import { useState } from "react";
import { sintaAPI } from "../config/Api";

const { Sider, Content } = Layout;

const Beranda = () => {
  const [trip, setTrip] = useState(["tes"]);
  const [porto, setPorto] = useState(["tes"]);

  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    checkTrip();
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  const checkTrip = async () => {
    try {
      const response = await sintaAPI.get(`/agent/get/${user}`).then((res) => {
        setTrip(res.data.data.trip);
        setPorto(res.data.data.portofolio);
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Layout
        style={{
          background: "none",
        }}
      >
        <NavbarAdm />
        <Content style={{ borderLeft: "1px solid #ABBED1" }}>
          <Wrapper>
            <Dashboard>Dashboard Agen</Dashboard>
            <Info>Halo, Selamat datang di task management dashboard agen</Info>

            <Dashboard>Paket Wisata</Dashboard>
            {trip.length === 0 ? (
              <EmptyPaketwisata />
            ) : (
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
            )}
            <Dashboard>Portofolio</Dashboard>
            {porto.length === 0 ? <EmptyPortofolio /> : "hai"}
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default Beranda;
