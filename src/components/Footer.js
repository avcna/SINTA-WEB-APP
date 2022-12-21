import styled from "styled-components";
import { Row, Col } from "antd";
import tfbank from "../assets/footer/image 56.svg";
import ovo from "../assets/footer/image 57.svg";
import gopay from "../assets/footer/image 58.svg";
import spay from "../assets/footer/image 54.svg";
import dana from "../assets/footer/image 55.svg";

const Section = styled.section`
  min-height: 350px;
  background-color: #dbedff;
`;

const Title = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
`;

const Menu = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #0053ad;
`;

const ContactMenu = styled(Menu)`
  color: #212121;
  margin: 0;
`;

const ContactName = styled(Menu)`
  font-size: 14px;
  line-height: 20px;
  margin-top: 4px;
`;

export const Helper = styled.span`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const Img = styled.img`
  vertical-align: middle;
`;

const Footer = () => {
  return (
    <>
      <Section>
        <div style={{ padding: "57px 100px", margin: "0px" }}>
          <Row>
            <Col span={6}>
              <Title>Tentang Sinta</Title>
            </Col>
            <Col span={6}>
              <Title>Opsi Pembayaran</Title>
            </Col>
            <Col span={6}>
              <Title>Ikuti Kami</Title>
            </Col>
            <Col span={6}>
              <Title>Hubungi Kami</Title>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Menu>Tentang Kami</Menu>
            </Col>
            <Col span={6}>
              <Helper></Helper>
              <Img src={tfbank} />
              <Helper></Helper>
              <Img src={ovo} />
            </Col>
            <Col span={6}>
              <ContactMenu>Facebook</ContactMenu>
              <ContactName>SINTA Travel</ContactName>
            </Col>
            <Col span={6}>
              <ContactMenu>Email</ContactMenu>
              <ContactName>sintahelpdesk@gmail.com</ContactName>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Menu>Bergabung Menjadi Agen</Menu>
            </Col>
            <Col span={6}>
              <Helper></Helper>
              <Img src={gopay} />
            </Col>
            <Col span={6}>
              <ContactMenu>Instagram</ContactMenu>
              <ContactName>@sinta.travel</ContactName>
            </Col>
            <Col span={6}>
              <ContactMenu>Whatsapp</ContactMenu>
              <ContactName>911</ContactName>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Menu>Bergabung Menjadi Agen</Menu>
            </Col>
            <Col span={6}>
              <Helper></Helper>
              <Img src={spay} />
              <Helper></Helper>
              <Img src={dana} />
            </Col>
          </Row>
        </div>
      </Section>
    </>
  );
};

export default Footer;
