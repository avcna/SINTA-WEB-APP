import Navbar from "../components/Navbar";
import styled from "styled-components";
import agent from "../assets/user/agent.png";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { sintaAPI } from "../config/Api";
import { useAuth } from "../config/Auth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loader";
import { LoadingText } from "../components/loaderText";
import {
  Format,
  FormWrapper,
  Input,
  InputWrapper,
  RequiredSign,
  Section,
  SubmitBtn,
  Text,
  TitleInput,
  TitlePage,
} from "./Register";

const Login = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  const { setAndGetTokens } = useAuth();

  const [formsL, setFormsL] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoad(true);
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
      setLoad(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <Section>
        <img src={agent} />
        <FormWrapper onSubmit={handleLogin}>
          <TitlePage>Selamat Datang Agen</TitlePage>
          <TitleInput>
            Email/Username<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) =>
                setFormsL(() => ({ ...formsL, email: e.target.value }))
              }
            />
          </InputWrapper>
          <Format>
            Pastikan alamat email/username yang anda masukkan sudah terdaftar
          </Format>

          <TitleInput>
            Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Masukkan akun email anda disini"
              required
              onChange={(e) =>
                setFormsL(() => ({ ...formsL, password: e.target.value }))
              }
            />
          </InputWrapper>
          <Format>Pastikan password yang anda masukkan benar</Format>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Text>
              Belum punya akun? <NavLink to="/register">Register</NavLink>
            </Text>
            <SubmitBtn type="submit">
              {load ? <LoadingText /> : "Login"}
            </SubmitBtn>
          </div>
        </FormWrapper>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
