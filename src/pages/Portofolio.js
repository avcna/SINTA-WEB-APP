import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { Title, Dashboard } from "../components/AgentComponents";
import styled from "styled-components";
import { useEffect } from "react";
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
