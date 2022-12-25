import styled from "styled-components";

export const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

export const Dashboard = styled(Title)`
  font-size: 28px;
  line-height: 36px;
  color: #212121;
  margin-bottom: 8px;
`;

export const Wrapper = styled.section`
  padding: 40px 20px 40px;
`;

export const Info = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #4d4d4d;
  margin-top: 0;
`;
