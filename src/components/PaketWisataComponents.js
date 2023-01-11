import { Col, Row } from "antd";
import styled from "styled-components";
import {
  Input,
  InputWrapper,
  RequiredSign,
  TitleInput,
  Format,
} from "../pages/Register";
import { TextArea } from "../pages/ProfilSaya";
import { Dashboard } from "./AgentComponents";
import { Button } from "../pages/PaketWisata";

export const FormUploadPaketWisata = () => {
  return (
    <>
      <Row gutter={[48, 28]} style={{ paddingBottom: "100px" }}>
        <Col span={12}>
          <Dashboard>Deskripsi Paket Wisata</Dashboard>
          <TitleInput>
            Judul Utama Paket Trip<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <Format>Batas maksimal judul adalah 60 karakter (0/60)</Format>
          <TitleInput>
            Deskripsi Utama Trip<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <TextArea
              placeholder="Masukkan judul utama paket trip anda disini"
              maxLength={700}
              required
              style={{ height: "304px" }}
            />
          </InputWrapper>
          <Format>Batas maksimal deskripsi adalah 700 karakter (0/700)</Format>

          <Dashboard>Detail Destinasi Paket Wisata</Dashboard>
          <TitleInput>
            Judul Destinasi Ke-1<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <Format>Batas maksimal judul adalah 60 karakter (0/60)</Format>

          <TitleInput>
            Foto Destinasi Ke-1<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <Format>Batas maksimal judul adalah 60 karakter (0/60)</Format>

          <TitleInput>
            Deskripsi Destinasi Ke-1<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <TextArea
              placeholder="Masukkan judul utama paket trip anda disini"
              required
              style={{ height: "304px" }}
              maxLength={700}
            />
          </InputWrapper>
          <Format>Batas maksimal deskripsi adalah 700 karakter (0/700)</Format>
        </Col>
        <Col span={12}>
          <Dashboard>Info Penting Tentang Paket Wisata</Dashboard>
          <TitleInput>
            Penjelasan Info Penting Terkait Dari Paket Trip
            <RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <TextArea
              placeholder="Masukkan judul utama paket trip anda disini"
              required
              style={{ height: "492px" }}
              maxLength={1200}
            />
          </InputWrapper>
          <Format>Batas maksimal deskripsi adalah 700 karakter (0/700)</Format>

          <Dashboard>Link Rundown Paket Wisata</Dashboard>
          <TitleInput>
            Link Spreadsheet atau Excel dari Rundown
            <RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <Format>Batas maksimal judul adalah 60 karakter (0/60)</Format>

          <Dashboard>Fasilitas Paket Wisata</Dashboard>
          <TitleInput>
            Fasilitas yang termasuk dalam paket wisata
            <RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <TextArea
              placeholder="Masukkan judul utama paket trip anda disini"
              required
              style={{ height: "304px" }}
              maxLength={700}
            />
          </InputWrapper>
          <Format>Batas maksimal deskripsi adalah 700 karakter (0/700)</Format>

          <TitleInput>
            Fasilitas yang tidak termasuk dalam paket wisata
            <RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <TextArea
              placeholder="Masukkan judul utama paket trip anda disini"
              required
              style={{ height: "304px" }}
              maxLength={700}
            />
          </InputWrapper>
          <Format>Batas maksimal deskripsi adalah 700 karakter (0/700)</Format>

          <Dashboard>Harga Paket Wisata</Dashboard>
          <TitleInput>Trip Dalam atau Luar Negeri</TitleInput>
          <InputWrapper>
            <input type="radio" name="radAnswer" />
            <TitleInput>Trip Dalam Negeri</TitleInput>
          </InputWrapper>
          <InputWrapper>
            <input type="radio" name="radAnswer" />
            <TitleInput>Trip Luar Negeri</TitleInput>
          </InputWrapper>
          <TitleInput>
            Apakah Harga Tertera Sudah Include Semua Fasilitas?*
          </TitleInput>
          <InputWrapper>
            <input type="radio" name="radioAnswer" />
            <TitleInput>Ya</TitleInput>
          </InputWrapper>
          <InputWrapper>
            <input type="radio" name="radioAnswer" />
            <TitleInput>Tidak</TitleInput>
          </InputWrapper>
          <Button>Upload</Button>
        </Col>
      </Row>
    </>
  );
};
