import styled from "styled-components";

const H1 = styled.h1`
  padding-top: 114px;
  font-family: Recoleta;
  font-size: 47px;
  font-weight: 600;
  line-height: 54.25px;
  color: #163a24;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 37px;
  }
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
  text-align: center !important;
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const P = styled.p`
  text-align: center !important;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  color: #163a24;
  display: flex !important;
`;

const Fdiv = styled.div`
  padding-top: 73px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Idiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 120px;
  border-radius: 15px;
`;

const Div = styled.div`
  background-color: #f2efe6;
`;

const H4 = styled.h4`
  font-family: Recoleta;
  font-size: 28px;
  font-weight: 600;
  line-height: 31px;
  margin: 0;
  text-align: center;
`;

const Sdiv = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  max-width: 260px;
`;
const Pi = styled.p`
  font-family: sans-serif;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: ##163a24;
`;

const Vmg = styled.img`
  width: 290px;
  height: 183px;
`;
export { Container, Img, Div, Fdiv, Idiv, P, H1, Pi, H4, Sdiv, Vmg };
