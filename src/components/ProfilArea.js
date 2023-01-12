import { Col, Row } from "antd";
import styled from "styled-components";
import lokasi from "../assets/profilArea/location.svg";
import wa from "../assets/profilArea/wa.svg";
import tele from "../assets/profilArea/telegram.svg";
import call from "../assets/profilArea/call.svg";
import ig from "../assets/profilArea/insta.svg";
import line from "../assets/profilArea/line.svg";
import fb from "../assets/profilArea/fb.svg";
import twt from "../assets/profilArea/twitter.svg";
import { NavLink } from "react-router-dom";

const Div = styled.div`
  padding: 30px 28px;
  box-shadow: 0px 2px 4px rgba(171, 190, 209, 0.6);
  border-radius: 8px;
  margin-right: 100px;
  margin-top: 56px;
`;

const Nama = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
  display: block;
  max-width: 164px;
`;

const ProfileBtn = styled.button`
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  background: #0053ad;
  border: none;
  display: block;
  width: 100%;
`;

const Foto = styled.div`
  width: 99px;
  height: 99px;
  border-radius: 100%;
  position: absolute;
  bottom: 0px;
`;

export const ProfilArea = ({ id, nama, foto }) => {
  return (
    <>
      <Div>
        <Row
          style={{
            borderBottom: "1px solid #ABBED1",
            paddingBottom: "32px",
            marginBottom: "32px",
          }}
        >
          <Col flex="99px" style={{ marginRight: "32px" }}>
            <Foto
              style={{
                backgroundSize: "99px 99px",
                background: `url(data:image/jpeg;base64,${foto})`,
              }}
            />
          </Col>
          <Col flex="auto">
            <Nama>{nama}</Nama>
            <NavLink to={`/profile/${id}`}>
              <ProfileBtn>Lihat Profil</ProfileBtn>
            </NavLink>
          </Col>
        </Row>
        <Row justify="space-between" style={{ marginBottom: "24px" }}>
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
        <Row justify="space-between" style={{ marginBottom: "14px" }}>
          <Col>
            <img src={ig} />
          </Col>
          <Col>
            <img src={line} />
          </Col>
          <Col>
            <img src={fb} />
          </Col>
          <Col>
            <img src={twt} />
          </Col>
        </Row>
      </Div>
    </>
  );
};
