import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 180px 16px;
  padding-bottom: 120px;
`;
const Img = styled.img`
  width: 492px;
  height: auto;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Textdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #163a24;
  max-width: 379px;
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 65.25px;
  color: #163a24;
  max-width: 338px;
`;
export { Container, Img, Div, Textdiv, P, H1 };
