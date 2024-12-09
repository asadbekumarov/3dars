import styled from "styled-components";

const Section = styled.header`
  background-color: #163a24;
`;
const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Img = styled.img`
  width: 673px;
  height: auto;
  @media (max-width: 1254px) {
    width: 100%;
    height: auto;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1254px) {
    flex-direction: column;
  }
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
  color: #fbfaf7;
  max-width: 475px;
  @media (max-width: 546px) {
    font-size: 16px;
  }
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 65.25px;
  color: #fbfaf7;
  max-width: 391px;
  @media (max-width: 546px) {
    font-size: 40px;
  }
`;

export { Section, Container, Img, Div, Textdiv, P, H1 };
