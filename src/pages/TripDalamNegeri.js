import Carousels from "../components/Carousel";
import Navbar from "../components/Navbar";
import { Col, Layout, Row } from "antd";
import { Title } from "./Home";
import Card from "../components/Card";
import { useState } from "react";
import { sintaAPI } from "../config/Api";
import { useEffect } from "react";

const { Sider, Content } = Layout;

const TDN = () => {
  const [trip, setTrip] = useState([]);
  const fetchTDN = async () => {
    try {
      const response = await sintaAPI
        .get("/trip/get/kategori?kategori=lokal")
        .then((res) => {
          setTrip(res.data.data);
          console.log("sukses");
        });
      console.log("sukses");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTDN();
  }, []);
  return (
    <>
      <Navbar />
      <Carousels />
      <Layout style={{ margin: "48px 100px", background: "#FFFFFF" }}>
        <Sider
          style={{ background: "#FFFFFF", marginRight: "68px" }}
          width={254}
        >
          <Title>Filter Paket Wisata</Title>
        </Sider>
        <Content style={{ background: "#FFFFFF" }}>
          <Title>Trip Dalam Negeri</Title>
          <Row gutter={[0, 64]}>
            {trip.map((trip) => {
              const { id, deskripsi, kota, provinsi } = trip;
              return (
                <Col span={8} key={id} {...trip}>
                  <Card
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                  />
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default TDN;
