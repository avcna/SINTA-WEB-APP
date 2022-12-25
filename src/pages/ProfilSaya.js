import NavbarAdm from "../components/NavbarAdm";
import { Layout } from "antd";
import { Dashboard, Info, Wrapper } from "../components/AgentComponents";
import { useEffect } from "react";

const { Content } = Layout;

const ProfilSaya = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  return (
    <>
      <Layout
        style={{
          background: "red",
          height: "100%",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }}
      >
        <NavbarAdm />
        <Content>
          <Wrapper>
            <Dashboard></Dashboard>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default ProfilSaya;
