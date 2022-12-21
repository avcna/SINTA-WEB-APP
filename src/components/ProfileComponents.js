import styled from "styled-components";
import { Row, Col } from "antd";
import Porto from "../assets/user/portofolio.png";
import { Title } from "../pages/Detail";
import { ContactUs, Desc } from "../components/DetailComponents";

export const Portofolio = () => {
  return (
    <>
      <Row gutter={[80, 80]}>
        <Col span={8}>
          <img src={Porto}></img>
        </Col>
        <Col span={8}>
          <img src={Porto}></img>
        </Col>
        <Col span={8}>
          <img src={Porto}></img>
        </Col>
        <Col span={8}>
          <img src={Porto}></img>
        </Col>
      </Row>
    </>
  );
};

export const TentangKami = () => {
  return (
    <>
      <Title>Tentang Kami</Title>
      <Desc>
        PT. Rahman Travel merupakan sebuah perusahaan yang bergerak di bidang
        pariwisata dan perjalanan. PT Rahman Travel didirikan sejak tahun 2012
        oleh beberapa team yang profesional yang terdiri dari berbagai latar
        pendidikan yang berbeda, diantaranya tour guide, tour leader, pemandu
        wisata, driver, marketing, administratif, dan event organizer. sejak
        tahun 2012 kami telah beroperasi sebagai travel agen di kota Malang.
        namun baru tahun 2018 bulan september kami melakukan ekspansi bisnis ke
        dunia digital karena banyaknya permintaan. Maka dari itu kami sebagai
        agen travel terbak di kota Malang siap memberikan anda pelayanan yang
        profesional dengan harga yang sangat bersahabat.
      </Desc>
    </>
  );
};

export const HubungiKami = () => {
  return (
    <>
      <Title>Hubungi Kami</Title>
      <Desc>
        Jika anda tertarik dengan salah satu pilihan paket-paket wisata yang
        kami tawarkan, anda dapat menghubungi kami melalui media yang tertera
        dibawah ini:
      </Desc>
    </>
  );
};
