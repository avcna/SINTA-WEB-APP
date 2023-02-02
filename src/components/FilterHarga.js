import styled from "styled-components";
import { useState, useEffect } from "react";
import { sintaAPI } from "../config/Api";

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

const FilterHarga = ({ passData, kategori }) => {
  const [price, setPrice] = useState(0);

  const fetchData = async () => {
    // setLoad(true);
    let angka = price;
    console.log(angka);
    try {
      const response = await sintaAPI
        .get(
          `/trip/get/maxpricekategori?maxprice=${angka}&kategori=${kategori}`
        )
        .then((res) => {
          passData(res.data.data);
          console.log("sukses filter");
        });

      // setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);
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
          max="100000000"
          // value="0"
          step="2000000"
          style={{ width: "100%" }}
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(price);
            // passData(data);
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
        <Button onClick={fetchData}>Apply</Button>
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
