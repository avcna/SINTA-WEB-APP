import styled from "styled-components";
import pw from "../assets/svg/EmptyPW.svg";
import porto from "../assets/svg/EmptyP.svg";

export const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

export const Dashboard = styled(Title)`
  font-size: 28px;
  line-height: 36px;
  color: #212121;
  margin-bottom: 8px;
`;

export const Wrapper = styled.section`
  padding: 40px;
`;

export const Info = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #4d4d4d;
  margin-top: 0;
`;

const Judul = styled(Title)`
  font-size: 20px;
  line-height: 28px;
  color: #212121;
`;

export const EmptyPaketwisata = () => {
  return (
    <>
      <center>
        <img src={pw} style={{ marginBottom: "0px" }} />
        <Judul style={{ marginTop: "8px", marginBottom: "0px" }}>
          Belum Ada Paket Wisata
        </Judul>
        <Info style={{ marginTop: "16px", maxWidth: "340px" }}>
          Saat ini anda belum mempublish paket trip sama sekali :(
        </Info>
      </center>
    </>
  );
};

export const EmptyPortofolio = () => {
  return (
    <>
      <center>
        <img src={porto} style={{ marginBottom: "0px" }} />
        <Judul style={{ marginTop: "8px", marginBottom: "0px" }}>
          Belum Ada Portofolio
        </Judul>
        <Info style={{ marginTop: "16px", maxWidth: "340px" }}>
          Saat ini anda belum mempublish portofolio sama sekali :(
        </Info>
      </center>
    </>
  );
};
