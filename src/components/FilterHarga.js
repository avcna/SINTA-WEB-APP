import styled from "styled-components";
import { useState } from "react";

const Title = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const Desc = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Button = styled.button`
  background: #0053ad;
  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  gap: 10px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
`;

const FilterHarga = () => {
  const [price, setPrice] = useState(0);
  return (
    <>
      <Title>Rentang Harga</Title>
      <Desc>Rp 0 - {price}</Desc>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <input
          type="range"
          min="0"
          max="50000000"
          // value="0"
          step="5000000"
          style={{ width: "100%" }}
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(price);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "36px",
        }}
      >
        <Button>Apply</Button>
        <Button
          style={{
            background: "white",
            border: "1px solid #0053AD",
            color: "#0053AD",
          }}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default FilterHarga;
