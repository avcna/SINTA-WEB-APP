import styled from "styled-components";
import Footer, { Helper } from "../components/Footer";
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
import axios from "axios";
import { sintaAPI } from "../config/Api";
import { useState } from "react";
import { useEffect } from "react";
import Carousels from "../components/Carousel";
import { NavLink as Link } from "react-router-dom";
import { Loading } from "../components/Loader";

export const CarouselDiv1 = styled.div`
  height: 500px;
  background: url(${Carousel1});
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

const NavLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #0053ad;
  text-decoration: none;
  padding-top: 32px;
`;

const Landing = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  const [trip, setTrip] = useState([]);
  const [trips, setTrips] = useState([]);
  const [tripHarga, setTripHarga] = useState([]);
  const [tripReq, setTripReq] = useState([]);
  const [loadTrip, setLoadTrip] = useState(true);
  const [loadTrips, setLoadTrips] = useState(true);
  const [loadHarga, setLoadHarga] = useState(true);
  const [loadReq, setLoadReq] = useState(true);

  const handleAPI = async () => {
    setLoadTrip(true);
    try {
      const response = await axios
        .get(
          "https://sintaapp-production.up.railway.app/trip/get/kategori?kategori=lokal"
        )
        .then((res) => {
          setTrip(res.data.data);
          console.log("sukses");
        });
      setLoadTrip(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handle500 = async () => {
    setLoadTrips(true);
    try {
      const response = await sintaAPI
        .get("/trip/get/kategori?kategori=internasional")
        .then((res) => {
          setTrips(res.data.data);
        });
      setLoadTrips(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleHarga = async () => {
    setLoadHarga(true);
    try {
      const response = await sintaAPI
        .get("/trip/get/price?maxPrice=500000")
        .then((res) => {
          setTripHarga(res.data.data);
          console.log("sukses");
        });
      setLoadHarga(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReq = async () => {
    setLoadReq(true);
    try {
      const response = await sintaAPI
        .get("/trip/get/requirement?requirement=false")
        .then((res) => {
          setTripReq(res.data.data);
          console.log("sukses");
        });
      setLoadReq(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleAPI();
    handle500();
    handleReq();
    handleHarga();
  }, []);

  return (
    <>
      <Navbar />
      <Carousels />
      <Main>
        {/* -------------------batas------------------------ */}
        <Section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Title>Ayo liburan ke destinasi menarik di dalam negeri!</Title>
            <NavLink to="/tripDalamNegeri">Lihat Selengkapnya</NavLink>
          </div>
          {loadTrip && <Loading />}
          <Row>
            {trip.slice(0, 4).map((trip) => {
              const { id, deskripsi, kota, provinsi, harga } = trip;
              return (
                <Col span={6} key={id} {...trip}>
                  <Card
                    id={id}
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                    harga={harga["1-3 orang"]}
                    foto={deskripsi.cover}
                  />
                </Col>
              );
            })}
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Title>Ayo liburan ke destinasi menarik di luar negeri!</Title>
            <NavLink to="/tripLuarNegeri">Lihat Selengkapnya</NavLink>
          </div>
          {loadTrips && <Loading />}
          <Row>
            {trips.slice(0, 4).map((trips) => {
              const { id, deskripsi, kota, provinsi, harga } = trips;

              return (
                <Col span={6} key={id} {...trips}>
                  <Card
                    id={id}
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                    harga={harga["1-3 orang"]}
                    foto={deskripsi.cover}
                  />
                </Col>
              );
            })}
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <Title>Under 500k udah bisa jalan-jalan, lho!</Title>
          {loadHarga && <Loading />}
          <Row>
            {tripHarga.slice(0, 4).map((tripHarga) => {
              const { id, deskripsi, kota, provinsi, harga } = tripHarga;
              return (
                <Col span={6} key={id} {...tripHarga}>
                  <Card
                    id={id}
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                    harga={harga["1-3 orang"]}
                    foto={deskripsi.cover}
                  />
                </Col>
              );
            })}
          </Row>
        </Section>
        {/* -------------------batas------------------------*/}
        <Section>
          <Title>Include semuanya tinggal bawa badan , lho!</Title>
          {loadReq && <Loading />}
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            {tripReq.slice(0, 4).map((tripReq) => {
              const { id, deskripsi, kota, provinsi, harga } = tripReq;
              return (
                <Col key={id} {...tripReq}>
                  <Card
                    id={id}
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                    harga={harga["1-3 orang"]}
                    foto={deskripsi.cover}
                  />
                </Col>
              );
            })}
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
