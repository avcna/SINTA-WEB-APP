import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import Footer from "../components/Footer";
import SuitcaseGuy from "../assets/user/suitcaseGuy.png";
import { Col, Row } from "antd";
import { useEffect } from "react";
import fotoAtas from "../assets/user/layananKami0.png";
import fotoBawah from "../assets/user/layananKami1.png";
import why1 from "../assets/user/why1.png";
import why2 from "../assets/user/why2.png";
import why3 from "../assets/user/why3.png";
import why4 from "../assets/user/why4.png";
import adit from "../assets/user/adit.png";
import salsa from "../assets/user/salsa.png";
import vincent from "../assets/user/vincent.png";

export const Margin = styled.body`
  margin: 102px 136px 120px;
`;

export const Section = styled.section`
  dispaly: flex;
  justify-content: space-between;
  margin-bottom: 142px;
`;

const WhyText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #212121;
`;

const TentangKami = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  return (
    <>
      <Navbar />
      <Margin>
        <Section>
          <Row>
            <Col flex="665px">
              <div>
                <Title>Tentang Kami</Title>
                <Desc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliq.
                </Desc>
              </div>
            </Col>
            <Col flex="auto">
              <img style={{ float: "right" }} src={SuitcaseGuy}></img>
            </Col>
          </Row>
        </Section>
        <Section>
          <Title>Layanan Kami</Title>
          <Row style={{ marginBottom: "64px" }}>
            <Col flex={355}>
              <img width="315px" src={fotoAtas} />
            </Col>
            <Col flex="auto">
              <Desc style={{ maxWidth: "813px" }}>
                Bagi para wistawan yang ingin berlibur, dapat mencari informasi
                terkait paket-paket trip liburan, baik dalam negeri maupun luar
                negeri dengan informasi paket trip yang cukup lengkap. Aplikasi
                ini juga membantu para wisatawan untuk dapat menjangkau para
                agen travel sebagai penyedia paket-paket trip liburan..
              </Desc>
            </Col>
          </Row>
          <Row>
            <Col flex={355}>
              <img width="315px" src={fotoBawah} />
            </Col>
            <Col flex="auto">
              <Desc style={{ maxWidth: "813px" }}>
                Bagi para wistawan yang ingin berlibur, dapat mencari informasi
                terkait paket-paket trip liburan, baik dalam negeri maupun luar
                negeri dengan informasi paket trip yang cukup lengkap. Aplikasi
                ini juga membantu para wisatawan untuk dapat menjangkau para
                agen travel sebagai penyedia paket-paket trip liburan.
              </Desc>
            </Col>
          </Row>
        </Section>
        <Section>
          <Title>Kenapa Memilih Kami?</Title>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img src={why1} />
              <WhyText>Range Harga Terbaik</WhyText>
            </div>
            <div>
              <img src={why2} />
              <WhyText>Terlengkap</WhyText>
            </div>
            <div>
              <img src={why3} />
              <WhyText>Bangun Portofolio</WhyText>
            </div>
            <div>
              <img src={why4} />
              <WhyText>Aman dan Amanah</WhyText>
            </div>
          </div>
        </Section>
        <Section>
          <Title>Orang Orang Di Balik Sinta</Title>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img src={adit} />
              <WhyText>Aditya Nugraha Tarihoran</WhyText>
            </div>
            <div>
              <img src={salsa} />
              <WhyText>Salsabila Dita Prasetya</WhyText>
            </div>
            <div>
              <img src={vincent} />
              <WhyText>Vinncent Alexander Wong</WhyText>
            </div>
          </div>
        </Section>
      </Margin>
      <Footer />
    </>
  );
};

export default TentangKami;
