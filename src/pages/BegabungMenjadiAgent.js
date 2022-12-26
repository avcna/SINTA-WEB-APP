import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import man from "../assets/user/Man1.png";
import woman from "../assets/user/Woman1.png";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import { SubmitBtn } from "./Register";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Margin, Section } from "./TentangKami";
import Footer from "../components/Footer";

const BergabungMenjadiAgent = () => {
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
            <Col flex={236}>
              <img src={man} />
            </Col>
            <Col flex="auto">
              <div>
                <Title>Tertarik Bergabung Menjadi Agen?</Title>
                <Desc style={{ width: "793px" }}>
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
          </Row>
          <Row>
            <Col flex={236}>
              <img src={woman} />
            </Col>
            <Col flex="auto">
              <div>
                <Title>Tunggu Apa Lagi?</Title>
                <Desc style={{ width: "793px" }}>
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
              <NavLink to="/login">
                <SubmitBtn style={{ marginTop: "32px" }}>
                  Bergabung Menjadi Agen
                </SubmitBtn>
              </NavLink>
            </Col>
          </Row>
        </Section>
      </Margin>
      <Footer />
    </>
  );
};

export default BergabungMenjadiAgent;
