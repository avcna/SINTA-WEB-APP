import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CarouselDiv1 } from "./Home";
import Carousel1 from "../assets/user/destinasi1.png";
import { Layout } from "antd";
import {
  Section,
  Deskripsi,
  InfoPenting,
  ContactUs,
  Rundown,
  Fasilitas,
} from "../components/DetailComponents";
import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { sintaAPI } from "../config/Api";
import { useEffect } from "react";
import Card from "../components/Card";
import { ProfilArea } from "../components/ProfilArea";

const { Sider, Content } = Layout;

export const Title = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

export const NavLink = styled.div`
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
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  let { idTrip } = useParams();
  const [value, setValue] = useState("deskripsi");
  const [detail, setDetail] = useState({
    deskripsi: "",
    informasiPenting: "",
    rundown: "",
    fasilitasTermasuk: [],
    fasilitasTidakTermasuk: [],
    harga: "",
    wa: "",
  });

  const handleNav = (val) => {
    setValue(val);
  };

  const fetchData = async () => {
    try {
      const response = await sintaAPI.get(`/agent/getbytrip/${idTrip}`, {
        params: {},
      });

      console.log("sukses");
      setDetail({
        deskripsi: response.data.data.trip[0].deskripsi.judul,
        informasiPenting: response.data.data.trip[0].informasiPenting,
        rundown: response.data.data.trip[0].linkRundown,
        fasilitasTermasuk: response.data.data.trip[0].fasilitasTermasuk,
        fasilitasTidakTermasuk:
          response.data.data.trip[0].fasilitasTidakTermasuk,
        wa: response.data.data.whatsappKantor,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <NavLink
                className={value == "deskripsi" ? "clicked" : ""}
                onClick={(e) => {
                  handleNav("deskripsi");
                }}
              >
                Deskripsi
              </NavLink>
              <NavLink
                className={value == "info" ? "clicked" : ""}
                onClick={(e) => {
                  handleNav("info");
                }}
              >
                Info Penting
              </NavLink>
              <NavLink
                className={value == "rundown" ? "clicked" : ""}
                onClick={(e) => {
                  handleNav("rundown");
                }}
              >
                Rundown
              </NavLink>
              <NavLink
                className={value == "fasilitas" ? "clicked" : ""}
                onClick={(e) => {
                  handleNav("fasilitas");
                }}
              >
                Fasilitas
              </NavLink>
              <NavLink
                className={value == "harga" ? "clicked" : ""}
                onClick={(e) => {
                  handleNav("harga");
                }}
              >
                Harga
              </NavLink>
            </Nav>
            <Title>Paket Wisata Pantai Malang Selatan Full Trip</Title>
          </Section>
          {value == "deskripsi" ? (
            <Deskripsi deskripsi={detail.deskripsi} />
          ) : null}
          {value == "info" ? (
            <InfoPenting infoPenting={detail.informasiPenting} />
          ) : null}
          {value == "rundown" ? <Rundown rundown={detail.rundown} /> : null}
          {value == "fasilitas" ? (
            <Fasilitas
              fasilitasTermasuk={detail.fasilitasTermasuk}
              fasilitasTidakTermasuk={detail.fasilitasTidakTermasuk}
            />
          ) : null}

          <ContactUs wa={detail.wa} />
        </Content>
        <Sider style={{ background: "none" }} width={462}>
          <ProfilArea />
        </Sider>
      </Layout>
    </>
  );
};

export default Detail;
