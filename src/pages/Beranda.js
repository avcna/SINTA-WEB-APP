import NavbarAdm from "../components/NavbarAdm";
import { Layout } from "antd";
import { Dashboard, Info, Wrapper } from "../components/AgentComponents";
import { useEffect } from "react";

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
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }}
      >
        <NavbarAdm style={{ background: "none" }} />
        <Content>
          <Wrapper>
            <Dashboard>Dashboard Agen</Dashboard>
            <Info>Halo, Selamat datang di task management dashboard agen</Info>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default Beranda;