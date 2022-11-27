import styled from "styled-components";
import { Row, Col } from "antd";

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
        </div>
      </Section>
    </>
  );
};

export default Footer;
