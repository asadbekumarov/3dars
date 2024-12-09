import styled from "styled-components";

const H1 = styled.h1`
  padding-top: 66px;
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 65.25px;
  color: #fbfaf7;
  text-align: center;
`;
const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Img = styled.img`
  width: 90px;
  text-align: center !important;
  height: auto;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #fbfaf7;
  max-width: 198px;
`;

const Fdiv = styled.div`
  padding-top: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Idiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

const Div = styled.div`
  background-color: #163a24;
`;
export { Container, Img, Div, Fdiv, Idiv, P, H1 };
