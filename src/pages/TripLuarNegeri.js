import Carousels from "../components/Carousel";
import Navbar from "../components/Navbar";
import { Col, Layout, Row } from "antd";
import { Title } from "./Home";
import Card from "../components/Card";
import { useState } from "react";
import { sintaAPI } from "../config/Api";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { Loading } from "../components/Loader";
import FilterHarga from "../components/FilterHarga";

const { Sider, Content } = Layout;

const TLN = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  const [trip, setTrip] = useState([]);
  const [load, setLoad] = useState(true);
  const [isError, setError] = useState(false);
  const fetchTDN = async () => {
    setLoad(true);
    try {
      const response = await sintaAPI
        .get("/trip/get/kategori?kategori=internasional")
        .then((res) => {
          setTrip(res.data.data);
        });
      console.log("sukses");
      setLoad(false);
    } catch (error) {
      console.log(error.data.message);
      setError(true);
    }
  };
  useEffect(() => {
    fetchTDN();
  }, []);

  const passData = (trip) => {
    setTrip(trip);
    console.log(trip);
  };
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
          <FilterHarga passData={passData} kategori="internasional" />
        </Sider>
        <Content style={{ background: "#FFFFFF" }}>
          <Title>Trip Luar Negeri</Title>
          {load && <Loading />}
          <Row gutter={[48, 64]}>
            {trip.map((trip) => {
              const { id, deskripsi, kota, provinsi, harga } = trip;
              return (
                <Col span={8} key={id} {...trip}>
                  <Card
                    id={id}
                    judul={deskripsi.judul}
                    kota={kota}
                    provinsi={provinsi}
                    harga={harga["1-3 orang"]}
                    foto={deskripsi.cover}
                  />
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default TLN;
