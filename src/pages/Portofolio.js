import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { Title, Dashboard } from "../components/AgentComponents";
import { TitleInput, RequiredSign, InputWrapper, Input } from "./Register";

const { Content } = Layout;

const Portofolio = () => {
  return (
    <>
      <Layout style={{ background: "none" }}>
        <NavbarAdm />
        <Content>
          <Dashboard>Dashboard Agen</Dashboard>
          <Title>Form Upload Portofolio</Title>
          <TitleInput>
            Judul Portofolio<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" required />
          </InputWrapper>

          <TitleInput>
            Deskripsi Portofolio<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" required />
          </InputWrapper>

          <TitleInput>
            Foto Portofolio<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" required />
          </InputWrapper>

          <TitleInput>
            Tautan Paket Wisata<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" required />
          </InputWrapper>
        </Content>
      </Layout>
    </>
  );
};

export default Portofolio;
