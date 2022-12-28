import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Carousel1 from "../assets/user/destinasi1.png";

export const CardBase = styled.div`
  box-shadow: 0px 2px 4px 0px #abbed199;
  height: 300px;
  max-width: 274px;
  border-radius: 12px;
  position: relative;
`;

export const CardImage = styled.div`
  max-width: 274px;
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
  position: absolute;
  bottom: 0px;
`;

const Card = ({ id, judul, kota, provinsi, harga, foto }) => {
  return (
    <>
      <NavLink style={{ color: "black" }} to={`detail/${id}`}>
        <CardBase>
          <CardImage
            style={{
              background: `url(data:image/jpeg;base64,${foto})`,
              backgroundSize: "cover",
            }}
            // `data:image/jpeg;base64,${data.data.map.data.image}`
          />
          <DescDiv>
            <PlaceName>{judul}</PlaceName>
            <Location>
              {kota}, {provinsi}
            </Location>
            <Price>IDR {harga}</Price>
          </DescDiv>
        </CardBase>
      </NavLink>
    </>
  );
};

export default Card;
