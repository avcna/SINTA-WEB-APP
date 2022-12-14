import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "antd";
import Carousel1 from "../assets/user/carousel1.png";
import Carousel2 from "../assets/user/carousel2.png";
import Carousel3 from "../assets/user/carousel3.png";
import Carousel4 from "../assets/user/carousel4.png";
import { Row, Col } from "antd";
import Foto from "../assets/user/whyman.png";
import Bullet from "../assets/svg/ulbullet.svg";
import Card from "../components/Card";

export const CarouselDiv1 = styled.div`
  height: 500px;
  background: url(${Carousel1});
  background-size: cover;
`;

const CarouselDiv2 = styled.div`
  height: 500px;
  background: url(${Carousel2});
  background-size: cover;
`;

const CarouselDiv3 = styled.div`
  height: 500px;
  background: url(${Carousel3});
  background-size: cover;
`;

const CarouselDiv4 = styled.div`
  height: 500px;
  background: url(${Carousel4});
  background-size: cover;
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
`;

const Main = styled.main`
  margin: 120px 100px;
`;

const Desc = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-align: justify;
  max-width: 720px;
`;

const Ul = styled.ul`
  list-style-image: url("${Bullet}");
`;

const Section = styled.section`
  margin-bottom: 132px;
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Carousel autoplay dotPosition="bottom">
        <CarouselDiv1 />
        <CarouselDiv2 />
        <CarouselDiv3 />
        <CarouselDiv4 />
      </Carousel>
      <Main>
        {/* -------------------batas------------------------ */}
        <Section>
          <Title>Ayo liburan ke destinasi menarik di dalam negeri!</Title>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <Title>Ayo liburan ke destinasi menarik di luar negeri!</Title>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <Title>Under 500k udah bisa jalan-jalan, lho!</Title>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <Title>Include semuanya tinggal bawa badan , lho!</Title>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Section>
        <Title>Kenapa memilih SINTA?</Title>
        <Row gutter={[0, 70]}>
          <Col flex="450px">
            <img width={450} src={Foto} />
          </Col>
          <Col flex="auto">
            <Desc>
              Bersama SINTA, kami menghubungkan para wisatawan dengan pihak
              travel agent, melalui penawaran paket-paket trip liburan yang
              dipublikasi oleh pihak travel agent pada platform kami. SINTA juga
              memastikan bahwa pihak-pihak travel agent yang bergabung menjadi
              mitra kami, merupakan travel agent yang terpercaya, dan terdaftar
              dibawah badan hukum.
              <Ul>
                <li>Range harga terbaik</li>
                <li>
                  Tersedia beragam paket trip liburan, baik dalam maupun luar
                  negeri
                </li>
                <li>
                  Agen kami merupakan pihak yang terpercaya dan bertanggung
                  jawab
                </li>
                <li>
                  Agen dapat membagikan portofolio untuk membagikan
                  pengalamannya
                </li>
              </Ul>
            </Desc>
          </Col>
        </Row>
      </Main>
      <Footer />
    </>
  );
};

export default Landing;
