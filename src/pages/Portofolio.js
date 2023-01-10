import { Layout } from "antd";
import NavbarAdm from "../components/NavbarAdm";
import { Title, Dashboard, Info } from "../components/AgentComponents";
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

const Button = styled.button`
  padding: 16px 82px;
  gap: 10px;
  background: #0053ad;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  border: none;
  min-width: 213px;
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
        <Content
          style={{ padding: "39px 39px", borderLeft: "1px solid #ABBED1" }}
        >
          <Dashboard>Dashboard Agen</Dashboard>
          <Info>Halo, Selamat datang di task management dashboard agen</Info>
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
          <div
            style={{
              width: "479px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px",
            }}
          >
            <Button
              style={{
                color: "#0053ad",
                border: "1px solid #0053AD",
                background: "white",
              }}
            >
              Batalkan
            </Button>
            <Button>Upload</Button>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Portofolio;
