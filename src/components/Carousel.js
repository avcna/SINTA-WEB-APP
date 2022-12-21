import styled from "styled-components";
import { Carousel } from "antd";
import Carousel1 from "../assets/user/carousel1.png";
import Carousel2 from "../assets/user/carousel2.png";
import Carousel3 from "../assets/user/carousel3.png";
import Carousel4 from "../assets/user/carousel4.png";

export const CarouselDiv1 = styled.div`
  height: 500px;
  background: url(${Carousel1});
  background-size: cover;
`;

const CarouselDiv2 = styled(CarouselDiv1)`
  background: url(${Carousel2});
`;

const CarouselDiv3 = styled.div`
  height: 500px;
  background: url(${Carousel3});
  background-size: cover;
`;

const CarouselDiv4 = styled.div`
  height: 500px;
  background: url(${Carousel4});
  background-size: cover;
`;

const Carousels = () => {
  return (
    <>
      <Carousel autoplay dotPosition="bottom">
        <CarouselDiv1 />
        <CarouselDiv2 />
        <CarouselDiv3 />
        <CarouselDiv4 />
      </Carousel>
    </>
  );
};

export default Carousels;
