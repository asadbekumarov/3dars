import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Div = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Fdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

const Pdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Img = styled.img`
  width: 110px;
  height: auto;
`;
const Pimg = styled.img`
  width: 492px;
  height: auto;
`;
const Textdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 48.25px;
  color: #163a24;
  max-width: 325px;
  margin: 0;
`;

const IDiv = styled.div`
  display: flex;
  gap: 86px;
  padding-bottom: 120px;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #163a24;
  max-width: 475px;
  margin: 0;
`;

const Hp1 = styled.p`
  margin-top: 113px;
  text-align: center;
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 54px;
  color: #163a24;
`;
const A = styled.a``;
export { Container, Div, Fdiv, Pdiv, Img, Pimg, Textdiv, H1, IDiv, P, Hp1, A };
