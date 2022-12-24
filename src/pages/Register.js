import Navbar from "../components/Navbar";
import styled from "styled-components";
import agent from "../assets/user/agent.png";
import Footer from "../components/Footer";
import { Form, useNavigate } from "react-router-dom";
import { sintaAPI } from "../config/Api";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const FormWrapper = styled.form`
  box-shadow: 0px 8px 16px rgba(171, 190, 209, 0.4);
  border-radius: 32px;
  padding: 48px 64px;
`;
const Section = styled.section`
  margin: 100px;
  display: flex;
  justify-content: space-between;
`;
const TitlePage = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

export const TitleInput = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const RequiredSign = styled.span`
  color: red;
`;
export const Input = styled.input`
  border: 1px solid #abbed1;
  border-radius: 6px;
  padding: 10px 16px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const SubmitBtn = styled.button`
  padding: 16px 69px;
  gap: 10px;
  background: #0053ad;
  border-radius: 8px;
  border: none;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    email: "",
    username: "",
    password: "",
    namaBadanUsaha: "",
  });

  const [formsL, setFormsL] = useState({
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await sintaAPI.post("/agent/create", {
        ...forms,
      });

      if (registerResponse.data.success) {
        try {
          const loginresponse = await sintaAPI.post("/agent/login", {
            ...forms.email,
            ...forms.password,
          });
          console.log(loginresponse);

          if (loginresponse.data.success) {
            const id = registerResponse.data.data.id;
            window.ID = id;

            const currentUser = await sintaAPI.get(`/agent/get/${id}`);
          } else {
            navigate("/beranda", { replace: true });
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <Section>
        <img src={agent} />
        <FormWrapper onSubmit={handleRegister}>
          <TitlePage>Daftarkan Akunmu Disini</TitlePage>
          <TitleInput>
            Email<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) =>
                setForms(() => ({ ...forms, email: e.target.value }))
              }
            />
          </InputWrapper>

          <TitleInput>
            Username<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) =>
                setForms(() => ({ ...forms, username: e.target.value }))
              }
            />
          </InputWrapper>

          <TitleInput>
            Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              type="password"
              onChange={(e) =>
                setForms(() => ({ ...forms, password: e.target.value }))
              }
            />
          </InputWrapper>

          <TitleInput>
            Konfirmasi Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" required />
          </InputWrapper>

          <TitleInput>
            Nama Badan Usaha<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) =>
                setForms(() => ({ ...forms, namaBadanUsaha: e.target.value }))
              }
            />
          </InputWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Text>
              Sudah punya akun?<NavLink to="/login">Login</NavLink>
            </Text>
            <SubmitBtn type="submit">Sign Up</SubmitBtn>
          </div>
        </FormWrapper>
      </Section>
      <Footer />
    </>
  );
};

export default Register;
