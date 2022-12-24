import Carousels from "../components/Carousel";
import Navbar from "../components/Navbar";
import { Col, Layout, Row } from "antd";
import { Title } from "./Home";
import Card from "../components/Card";
import { useState } from "react";
import { sintaAPI } from "../config/Api";
import { useEffect } from "react";

const { Sider, Content } = Layout;

const TLN = () => {
  const [trip, setTrip] = useState([]);
  const fetchTDN = async () => {
    try {
      const response = await sintaAPI
        .get("/trip/get/kategori?kategori=internasional")
        .then((res) => {
          setTrip(res.data.data);
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
          <Title>Trip Luar Negeri</Title>
          <Row gutter={[0, 64]}>
            {trip.map((trip) => {
              const { id, deskripsi, kota, provinsi } = trip;
              return (
                <Col span={8} key={trip.id} {...trip}>
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

export default TLN;
