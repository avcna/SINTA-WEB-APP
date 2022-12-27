import NavbarAdm from "../components/NavbarAdm";
import { Col, Layout, Row } from "antd";
import { Dashboard, Info, Wrapper } from "../components/AgentComponents";
import { useEffect } from "react";
import { Input, InputWrapper, RequiredSign, TitleInput } from "./Register";
import styled from "styled-components";

const { Content } = Layout;

const TextArea = styled.textarea`
  border: 1px solid #abbed1;
  border-radius: 6px;
  padding: 12px 16px;
  width: 100%;
`;

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
          background: "none",
          height: "100%",
          width: "100%",
        }}
      >
        <NavbarAdm />
        <Content style={{ margin: "56px 84px" }}>
          <Wrapper>
            <Dashboard>Profil Utama Saya</Dashboard>
            <Row gutter={[48, 28]}>
              <Col span={12}>
                <TitleInput>
                  Nama Badan Usaha<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input placeholder="Rahman Travel" required />
                </InputWrapper>
              </Col>
              <Col span={12}>
                <TitleInput>
                  Alamat Kantor<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input
                    placeholder="Masukkan akun email anda disini"
                    required
                  />
                </InputWrapper>
              </Col>
              <Col span={12}>
                <TitleInput>
                  Nama PIC<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input
                    placeholder="Masukkan akun email anda disini"
                    required
                  />
                </InputWrapper>
              </Col>
              <Col span={12}>
                <TitleInput>
                  Kontak Whatsapp PIC<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input
                    placeholder="Masukkan akun email anda disini"
                    required
                  />
                </InputWrapper>
              </Col>
              <Col span={12}>
                <TitleInput>
                  Surat Izin Usaha<RequiredSign>*</RequiredSign>
                </TitleInput>
                <InputWrapper>
                  <Input
                    placeholder="Masukkan akun email anda disini"
                    required
                  />
                </InputWrapper>
              </Col>
            </Row>

            <TitleInput>
              Bio<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <TextArea
                style={{ height: "150px", padding: "16px" }}
                maxLength={500}
                placeholder="Masukkan akun email anda disini"
                type="text"
                rows="4"
                required
              />
            </InputWrapper>
            <Dashboard>Kontak Yang Dapat Dihubungi Wisatawan</Dashboard>
            <TitleInput>
              Nomor Telepon<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Nomor Telepon<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Akun Telegram<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Kontak WhatsApp<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Akun Line<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Akun Instagram<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Akun Twitter<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <TitleInput>
              Akun Facebook<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <Input placeholder="Masukkan akun email anda disini" required />
            </InputWrapper>
            <Dashboard>Tentang Perusahaan Anda</Dashboard>
            <TitleInput>
              Tentang Saya<RequiredSign>*</RequiredSign>
            </TitleInput>
            <InputWrapper>
              <TextArea
                placeholder="Masukkan akun email anda disini"
                rows="6"
                required
              />
            </InputWrapper>
          </Wrapper>
        </Content>
      </Layout>
    </>
  );
};

export default ProfilSaya;
