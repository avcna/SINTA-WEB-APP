import Navbar from "../components/Navbar";
import { Title } from "./Detail";
import { ContactUs, Desc, Section } from "../components/DetailComponents";
import styled from "styled-components";
import { Rumah } from "../assets/svg/Vector";
import {
  HubungiKami,
  Portofolio,
  TentangKami,
} from "../components/ProfileComponents";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { sintaAPI } from "../config/Api";

const ProfilePict = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #82b6ff;
`;

const Username = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #212121;
  margin-top: 0px;
  margin-bottom: 32px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  border-bottom: 2px solid #abbed1;
  position: relative;
`;

const NavLink = styled.div`
  padding: 24px 0;
  width: 220px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Profile = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    fetchData();
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  const [value, setValue] = useState("paket wisata");
  const [profil, setProfil] = useState({
    id: 0,
    nama: "",
    username: "",
  });
  let { idAgen } = useParams();
  const fetchData = async () => {
    // setLoad(true);
    try {
      const response = await sintaAPI.get(`/agent/get/${idAgen}`, {
        params: {},
      });

      console.log("sukses");
      setProfil({
        id: response.data.data.id,
        nama: response.data.data.namaBadanUsaha,
        username: response.data.data.username,
      });
      // console.log(response.data.data.trip[0].deskripsi.detailDestinasi[0].id);
      // setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Section>
        <ProfilePict />
        <Title style={{ marginBottom: "8px" }}>{profil.nama}</Title>
        <Username>@{profil.username}</Username>
        <Desc style={{ maxWidth: "1005px" }}>
          PT. Rahman Travel merupakan agen travel terpercaya yang telah berdiri
          sejak tahun 2012. Kami telah melayani jutaan wisatawan untuk berlibur.
          Untuk pemesanan tiket wisata dapat menghubungi kami lebih lanjut
          melalui media yang dapat anda lihat pada bagian Hubungi Agen.
        </Desc>
      </Section>
      <Section>
        <Nav>
          <NavLink
            className={value == "paket wisata" ? "clicked" : ""}
            onClick={(e) => {
              setValue("paket wisata");
            }}
          >
            <Rumah />
            Paket Wisata
          </NavLink>
          <NavLink
            className={value == "portofolio" ? "clicked" : ""}
            onClick={(e) => {
              setValue("portofolio");
            }}
          >
            Portofolio
          </NavLink>
          <NavLink
            className={value == "tentang agen" ? "clicked" : ""}
            onClick={(e) => {
              setValue("tentang agen");
            }}
          >
            Tentang Agen
          </NavLink>
          <NavLink
            className={value == "hubungi kami" ? "clicked" : ""}
            onClick={(e) => {
              setValue("hubungi kami");
            }}
          >
            Hubungi Kami
          </NavLink>
        </Nav>
      </Section>
      <Section>
        {value == "portofolio" ? (
          <>
            <Portofolio />
          </>
        ) : null}
        {value == "tentang kami" ? (
          <>
            <TentangKami />
          </>
        ) : null}
        {value == "hubungi kami" ? (
          <>
            <HubungiKami />
          </>
        ) : null}
      </Section>

      <ContactUs wa="https://www.google.com/" />
      <Footer />
    </>
  );
};

export default Profile;
