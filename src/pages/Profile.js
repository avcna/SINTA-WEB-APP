import Navbar from "../components/Navbar";
import { Title, NavLink as Link } from "./Detail";
import { ContactUs, Desc, Section } from "../components/DetailComponents";
import styled from "styled-components";
import { Rumah } from "../assets/svg/Vector";
import {
  HubungiKami,
  Portofolio,
  TentangKami,
} from "../components/ProfileComponents";
import Footer from "../components/Footer";
import { useEffect } from "react";

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
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 2px solid #abbed1;
  position: relative;
`;

const NavLink = styled(Link)`
  padding: 24px auto;
  width: 220px;
  background-color: #82b6ff;
  // position: absolute;
  // bottom: 0px;
`;

const Profile = () => {
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
      <Section>
        <ProfilePict />
        <Title style={{ marginBottom: "8px" }}>Rahman Travel</Title>
        <Username>@rahman_travel</Username>
        <Desc style={{ maxWidth: "1005px" }}>
          PT. Rahman Travel merupakan agen travel terpercaya yang telah berdiri
          sejak tahun 2012. Kami telah melayani jutaan wisatawan untuk berlibur.
          Untuk pemesanan tiket wisata dapat menghubungi kami lebih lanjut
          melalui media yang dapat anda lihat pada bagian Hubungi Agen.
        </Desc>
      </Section>
      <Section>
        <Nav>
          <NavLink>
            <Rumah />
            Paket Wisata
          </NavLink>
          <NavLink>Portofolio</NavLink>
          <NavLink>Tentang Agen</NavLink>
          <NavLink>Hubungi Kami</NavLink>
        </Nav>
      </Section>
      <Section>
        <Portofolio />
      </Section>
      <Section>
        <TentangKami />
      </Section>
      <Section>
        <HubungiKami />
      </Section>
      <ContactUs wa="https://www.google.com/" />
      <Footer />
    </>
  );
};

export default Profile;
