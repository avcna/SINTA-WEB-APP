import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { useEffect } from "react";
import { Dashboard, Info } from "../components/AgentComponents";

const { Content } = Layout;
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
        </Content>
      </Layout>
    </>
  );
};

export default PaketWisata;
