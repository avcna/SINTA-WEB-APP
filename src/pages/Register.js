import Navbar from "../components/Navbar";
import styled from "styled-components";
import agent from "../assets/user/agent.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { sintaAPI } from "../config/Api";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../config/Auth";
import { LoadingText } from "../components/loaderText";

export const FormWrapper = styled.form`
  box-shadow: 0px 8px 16px rgba(171, 190, 209, 0.4);
  border-radius: 32px;
  padding: 48px 64px;
`;
export const Section = styled.section`
  margin: 100px;
  display: flex;
  justify-content: space-between;
`;

export const TitlePage = styled.p`
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
  margin-top: 0px;
  margin-bottom: 7px;
`;

export const Text = styled.p`
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
  padding: 12px 16px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const SubmitBtn = styled.button`
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

export const Format = styled.p`
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #89939e;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Register = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  const { setAndGetTokens } = useAuth();
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
  const [load, setLoad] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const registerResponse = await sintaAPI.post("/agent/create", {
        ...forms,
      });
      console.log(registerResponse);

      if (registerResponse.data.success) {
        console.log("sukses");
        try {
          const loginresponse = await sintaAPI.post("/agent/login", {
            ...formsL,
          });
          console.log(loginresponse);

          if (loginresponse.data.success) {
            console.log("sukses login");
            const token = loginresponse.data.data.jwt;
            const id = loginresponse.data.data.agent.id;
            window.ID = id;

            const currentUser = await sintaAPI.get(`/agent/get/${id}`);
            setAndGetTokens(token, id);
            navigate("/beranda", { replace: true });
          }
        } catch (error) {
          console.log(error);
        }
      }
      setLoad(false);
    } catch (error) {
      console.log(error);
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
              type="email"
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) => {
                setForms(() => ({ ...forms, email: e.target.value }));
                setFormsL(() => ({ ...formsL, email: e.target.value }));
              }}
            />
          </InputWrapper>
          <Format>
            Gunakan alamat email yang valid. Contoh : abcde@gmail.com
          </Format>

          <TitleInput>
            Username<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun username anda disini"
              required
              onChange={(e) => {
                setForms(() => ({ ...forms, username: e.target.value }));
                setFormsL(() => ({ ...formsL, email: e.target.value }));
              }}
            />
          </InputWrapper>
          <Format>Panjang username 8-30 karakter</Format>

          <TitleInput>
            Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              type="password"
              onChange={(e) => {
                setForms(() => ({ ...forms, password: e.target.value }));
                setFormsL(() => ({ ...formsL, password: e.target.value }));
              }}
            />
          </InputWrapper>
          <Format>
            Panjang password 8-30 karakter, dengan minimal 1 huruf kapital, 1
            angka, dan 1 tanda baca
          </Format>

          <TitleInput>
            Konfirmasi Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Masukkan akun email anda disini"
              // required
            />
          </InputWrapper>
          <Format>
            Pastikan password yang anda masukkan ulang sama dengan sebelumnya
          </Format>

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
          <Format>
            Gunakan huruf kapital pada setiap awal kata. Contoh : Rahman Travel
          </Format>

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
            <SubmitBtn type="submit">
              {load ? <LoadingText /> : "Sign Up"}
            </SubmitBtn>
          </div>
        </FormWrapper>
      </Section>
      <Footer />
    </>
  );
};

export default Register;
