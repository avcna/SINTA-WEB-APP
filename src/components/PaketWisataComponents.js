import { Col, Row } from "antd";
import styled from "styled-components";
import {
  Input,
  InputWrapper,
  RequiredSign,
  TitleInput,
} from "../pages/Register";

export const FormUploadPaketWisata = () => {
  return (
    <>
      <Row gutter={[48, 28]}>
        <Col span={12}>
          <TitleInput>
            Judul Utama Paket Trip<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <TitleInput>
            Judul Utama Paket Trip<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
          <TitleInput>
            Judul Utama Paket Trip<RequiredSign>*</RequiredSign>
          </TitleInput>
          <InputWrapper>
            <Input
              placeholder="Masukkan judul utama paket trip anda disini"
              required
            />
          </InputWrapper>
        </Col>
      </Row>
    </>
  );
};
