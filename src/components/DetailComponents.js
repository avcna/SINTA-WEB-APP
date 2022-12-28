import styled from "styled-components";
import { Title } from "../pages/Home";
import "../pages/style.css";

export const Section = styled.section`
  margin: 56px 48px 56px 100px;
`;

const TitleDesc = styled(Title)`
  line-height: 44px;
`;

export const Desc = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: justify;
  letter-spacing: 0.5px;
`;

const Button = styled.button`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  width: 160px;
  height: 46px;
  border-radius: 8px;
  border: none;
  margin-right: 32px;
  margin-bottom: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const Deskripsi = ({ deskripsi }) => {
  return (
    <>
      <Section>
        <TitleDesc>Deskripsi Paket Wisata</TitleDesc>
        <Desc>{deskripsi}</Desc>
      </Section>
    </>
  );
};

export const InfoPenting = ({ infoPenting }) => {
  return (
    <>
      <Section>
        <TitleDesc>Informasi Penting Terkait Paket Wisata</TitleDesc>
        <Desc>{infoPenting}</Desc>
      </Section>
    </>
  );
};

export const Rundown = ({ rundown }) => {
  return (
    <>
      <Section style={{ position: "relative" }}>
        <TitleDesc>Rundown Dari Paket Wisata</TitleDesc>
        <Desc>
          Untuk rundown atau itenary dari paket wisata ini, dapat dilihat dengan
          mengklik tombol dibawah ini.
        </Desc>
        <a href={rundown} target="_blank" style={{ textAlign: "center" }}>
          <Button
            className="centerBtn"
            style={{
              background: "#0053AD",
            }}
          >
            Lihat Rundown
          </Button>
        </a>
      </Section>
    </>
  );
};

export const Fasilitas = ({ fasilitasTermasuk, fasilitasTidakTermasuk }) => {
  return (
    <>
      <Section>
        <TitleDesc style={{ color: "#009262" }}>
          Fasilitas Yang Sudah Termasuk Dalam Paket Wisata
        </TitleDesc>
        <Desc>{fasilitasTermasuk}</Desc>
        <TitleDesc style={{ color: "#E02B1D" }}>
          Fasilitas Yang Tidak Termasuk Dalam Paket Wisata
        </TitleDesc>
        <Desc>{fasilitasTidakTermasuk}</Desc>
      </Section>
    </>
  );
};

export const Harga = () => {
  return <></>;
};

export const ContactUs = ({ wa, tele }) => {
  return (
    <>
      <Section>
        <TitleDesc>Tertarik Untuk Memesannya? Hubungi Kami Di</TitleDesc>
        <a
          style={{ textDecoration: "none" }}
          href={`https://wa.me/${wa}`}
          target="_blank"
        >
          <Button style={{ background: "#25d366" }}>whatsapp</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={tele} target="_blank">
          <Button style={{ background: "#2AABEE" }}>Telegram</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={wa} target="_blank">
          <Button style={{ background: "#FFB240" }}>Telepon</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={tele} target="_blank">
          <Button style={{ background: "#E1306C" }}>Instagram</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={wa} target="_blank">
          <Button style={{ background: " #4267B2" }}>Facebook</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={tele} target="_blank">
          <Button style={{ background: "#00B900" }}>Line</Button>
        </a>
        <a style={{ textDecoration: "none" }} href={tele} target="_blank">
          <Button style={{ background: "#00ACEE" }}>Twitter</Button>
        </a>
      </Section>
    </>
  );
};
