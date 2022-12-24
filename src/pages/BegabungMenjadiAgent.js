import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import man from "../assets/user/Man1.png";
import woman from "../assets/user/Woman1.png";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import { SubmitBtn } from "./Register";
import { NavLink } from "react-router-dom";

const BergabungMenjadiAgent = () => {
  return (
    <>
      <Navbar />
      <Row>
        <Col flex={236}>
          <img src={man} />
        </Col>
        <Col flex="auto">
          <div>
            <Title>Tertarik Bergabung Menjadi Agen?</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliq.
            </Desc>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={woman} />
        </Col>
        <Col>
          Tunggu Apalagi
          <NavLink to="/login">
            <SubmitBtn>Bergabung Menjadi Agen</SubmitBtn>
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default BergabungMenjadiAgent;
