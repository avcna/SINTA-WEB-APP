import { Col, Layout, Row } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { useEffect } from "react";
import { Dashboard, Wrapper } from "../components/AgentComponents";
import { Input, InputWrapper, RequiredSign, TitleInput } from "./Register";

const { Content } = Layout;
const AkunSaya = () => {
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
            <Dashboard>Akun Anda</Dashboard>
            <Row gutter={[48, 28]}>
              <Col span={12}>
                <TitleInput>
                  Email<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input placeholder="Rahman Travel" required />
                </InputWrapper>
              </Col>
              <Col span={12}>
                <TitleInput>
                  Username<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input placeholder="Rahman Travel" required />
                </InputWrapper>
              </Col>
            </Row>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default AkunSaya;
