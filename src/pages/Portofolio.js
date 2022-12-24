import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { Title, Dashboard } from "../components/AgentComponents";
import styled from "styled-components";
import {
  TitleInput,
  RequiredSign,
  InputWrapper,
  Input as In,
} from "./Register";

const { Content } = Layout;
const Input = styled(In)`
  max-width: 479px;
`;
const Portofolio = () => {
  return (
    <>
      <Layout style={{ background: "none" }}>
        <NavbarAdm />
        <Content style={{ padding: "39px 39px" }}>
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
