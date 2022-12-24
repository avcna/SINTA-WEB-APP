import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import Footer from "../components/Footer";
import SuitcaseGuy from "../assets/user/suitcaseGuy.png";
import { Col, Row } from "antd";

export const Margin = styled.body`
  margin: 102px 136px 120px;
`;

export const Section = styled.section`
  dispaly: flex;
  justify-content: space-between;
`;

const TentangKami = () => {
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
        </Section>
        <Section>
          <Title>Kenapa Memilih Kami?</Title>
        </Section>
        <Section>
          <Title>Orang Orang Di Balik Sinta</Title>
        </Section>
      </Margin>
      <Footer />
    </>
  );
};

export default TentangKami;
