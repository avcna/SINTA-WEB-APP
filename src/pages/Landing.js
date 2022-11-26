import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "antd";
import { redirect } from "react-router-dom";

const CarouselDiv = styled.div`
  height: 100px;
  background-color: grey;
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <Carousel autoplay>
        <CarouselDiv>1</CarouselDiv>
        <CarouselDiv>2</CarouselDiv>
        <CarouselDiv>3</CarouselDiv>
      </Carousel>
      tesss
      <Footer />
    </>
  );
};

export default Landing;
