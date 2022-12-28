import { Col, Row } from "antd";
import styled from "styled-components";
import lokasi from "../assets/profilArea/location.svg";
import wa from "../assets/profilArea/wa.svg";
import tele from "../assets/profilArea/telegram.svg";
import call from "../assets/profilArea/call.svg";

const Div = styled.div`
  padding: 30px 28px;
  box-shadow: 0px 2px 4px rgba(171, 190, 209, 0.6);
  border-radius: 8px;
`;

const Nama = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
  display: block;
`;

export const ProfilArea = ({ nama, kontak }) => {
  return (
    <>
      <Div>
        <Row style={{ borderBottom: "1px solid #ABBED1" }}>
          <Nama>Rahman Travel</Nama>
        </Row>
        <Row justify="space-between">
          {/* <Col span={24}>
            <Nama>Jangkau Kami Melalui :</Nama>
          </Col> */}
          <Col>
            <img src={lokasi} />
          </Col>
          <Col>
            <img src={wa} />
          </Col>
          <Col>
            <img src={tele} />
          </Col>
          <Col>
            <img src={call} />
          </Col>
        </Row>
        <Row justify="space-between">
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Div>
    </>
  );
};
