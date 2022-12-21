import Navbar from "../components/Navbar";
import styled from "styled-components";
import agent from "../assets/user/agent.png";

const FormWrapper = styled.div`
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

const TitleInput = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const RequiredSign = styled.span`
  color: red;
`;
const Input = styled.input`
  border: 1px solid #abbed1;
  border-radius: 6px;
  padding: 10px 16px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const Register = () => {
  return (
    <>
      <Navbar />
      <Section>
        <img src={agent} />
        <FormWrapper>
          <TitlePage>Daftarkan Akunmu Disini</TitlePage>
          <TitleInput>
            Email<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" />
          </InputWrapper>

          <TitleInput>
            Username<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" />
          </InputWrapper>

          <TitleInput>
            Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" />
          </InputWrapper>

          <TitleInput>
            Konfirmasi Password<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" />
          </InputWrapper>

          <TitleInput>
            Nama Badan Usaha<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input placeholder="Masukkan akun email anda disini" />
          </InputWrapper>
        </FormWrapper>
      </Section>
    </>
  );
};

export default Register;
