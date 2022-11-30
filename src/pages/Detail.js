import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CarouselDiv1 } from "./Landing";
import Carousel1 from "../assets/user/destinasi1.png";
import { Layout } from "antd";
import {
  Section,
  Deskripsi,
  InfoPenting,
  ContactUs,
} from "../components/DetailComponents";
import "./style.css";
import { useState } from "react";

const { Sider, Content } = Layout;

const Title = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

const NavLink = styled.div`
  border-radius: 8px;
  padding: 36px;
  flex-grow: 1;

  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: stretch;
  border: 2px solid #abbed1;
  border-radius: 8px;
`;

const Detail = () => {
  const [value, setValue] = useState("a");

  return (
    <>
      <Navbar />
      <CarouselDiv1
        style={{ background: `url(${Carousel1})`, backgroundSize: "cover" }}
      />
      <Layout>
        <Content>
          <Section>
            <Nav>
              <NavLink value="deskripsi" className="clicked">
                Deskripsi
              </NavLink>
              <NavLink
                value="info"
                onClick={(e) => {
                  setValue(e.target.value);
                  console.log(value);
                }}
              >
                Info Penting
              </NavLink>
              <NavLink value="rundown">Rundown</NavLink>
              <NavLink value="fasilitas">Fasilitas</NavLink>
              <NavLink value="harga">Harga</NavLink>
            </Nav>
            <Title>Paket Wisata Pantai Malang Selatan Full Trip</Title>
          </Section>
          <Deskripsi deskripsi="Bosan dengan aktifitas sehari – hari dan ingin liburan yang menyenangkan? Kini kami telah menyediakan paket wisata pantai malang khusus bagi anda yang ingin mencari  suasana liburan yang baru dan menyenangkan. Berbeda dengan tempat wisata pantai  lainnya, tujuan wisata kali ini adalah Pantai CMC (Clungup Mangrove Conservation) yang merupakan Pantai paling eksotis dan paling luxury di kota Malang. Bahkan bisa dibilang pantai paling luxury di Jawa Timur. Mengingat untuk menuju Ke Pantai ini dibutuhkan Reservasi dan tidak setiap orang dapat tiba – tiba datang dan masuk begitu saja. Terkait trip kali ini, berikut destinasi-destinasi yang akan kita tuju." />
          <InfoPenting />
          <ContactUs wa="https://www.google.com/" />
        </Content>
        <Sider style={{ background: "none" }} width={462}>
          tessss
        </Sider>
      </Layout>
    </>
  );
};

export default Detail;
