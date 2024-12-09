import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Img = styled.img`
  width: 492px;
  height: auto;
`;

const Div = styled.div`
  margin-top: 119px;
  margin-bottom: 119px;
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
  max-width: 475px;
  margin: 0;
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 54.25px;
  color: #163a24;
  max-width: 391px;
  margin: 0;
`;
const Button = styled.button`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  color: #fbfaf7;
  background-color: #198c36;
  border: none;
  border-radius: 160px;
  padding: 15px 25px;
  max-width: 191px;
  cursor: pointer;
`;
export { Container, Img, Div, Textdiv, P, H1, Button };
