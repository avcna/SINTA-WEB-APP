import NavbarAdm from "../components/NavbarAdm";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const Beranda = () => {
  const pageValue = "beranda";
  return (
    <>
      <Layout style={{ background: "none" }}>
        <NavbarAdm style={{ background: "none" }} />
        <Content>konten</Content>
      </Layout>
    </>
  );
};

export default Beranda;
