import styled from "styled-components";
const Div = styled.div`
  background-color: #f2efe6;
  padding-bottom: 119px;
`;
const H2 = styled.h2`
  padding-top: 119px;
  font-family: Recoleta;
  font-size: 48px;
  margin: 0;
  font-weight: 600;
  line-height: 65.25px;
  color: #163a24;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Img = styled.img`
  width: 1180px;
  text-align: center !important;
  height: auto;
  @media (max-width: 1232px) {
    width: 100%;
  }
`;
const P = styled.p`
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #163a24;
`;
export { Div, Container, Img, H2, P };
