import styled from "styled-components";
import Carousel1 from "../assets/user/destinasi1.png";

export const CardBase = styled.div`
  box-shadow: 0px 2px 4px 0px #abbed199;
  height: 330px;
  max-width: 274px;
  border-radius: 12px;
`;

export const CardImage = styled.div`
  width: 274px;
  height: 160px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const DescDiv = styled.div`
  display: block;
  margin: 16px;
`;

const PlaceName = styled.div`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;

const Location = styled(PlaceName)`
  font-weight: 500;
  color: #717171;
`;

const Price = styled(PlaceName)`
  font-size: 18px;
  line-height: 28px;
  color: #ff5a4f;
`;

const Card = ({ judul, kota, provinsi, harga }) => {
  return (
    <>
      <CardBase>
        <CardImage
          style={{ background: `url(${Carousel1})`, backgroundSize: "cover" }}
        />
        <DescDiv>
          <PlaceName>{judul}</PlaceName>
          <Location>
            {kota}, {provinsi}
          </Location>
          <Price>{harga}</Price>
        </DescDiv>
      </CardBase>
    </>
  );
};

export default Card;
