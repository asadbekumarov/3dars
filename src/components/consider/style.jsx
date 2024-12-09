import styled from "styled-components";

const H1 = styled.h1`
  padding-top: 66px;
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 65.25px;
  color: #163a24;
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
  text-align: start;
`;
const P = styled.p`
  text-align: start !important;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: #163a24;
  display: flex !important;
  @media (max-width: 424px) {
    font-size: 14px;
  }
`;

const Fdiv = styled.div`
  padding-top: 73px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Idiv = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: #fbfaf7;
  padding: 100px 45px;
  flex-direction: column;
  align-items: start;
  padding-bottom: 120px;
  text-align: start;
  width: 353px;
  height: auto;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 300px;
    padding: 70px 35px;
  }
  transition: all 0.3s ease; /* O'zgarishni silliq qilish uchun */
  &:hover {
    width: 400px;
    height: 400px;
  }
`;

const Div = styled.div`
  background-color: #ffffff;
`;

const H4 = styled.h4`
  font-family: Recoleta;
  font-size: 24px;
  font-weight: 600;
`;

const Sdiv = styled.div`
  text-align: start;
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Span = styled.span`
  width: 8px;
  height: 8px;
  background-color: #163a24;
  border-radius: 50%;
`;

const Pi = styled.p`
  font-family: Noto Sans;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #163a24;
`;
export { Container, Img, Div, Fdiv, Idiv, P, H1, Pi, H4, Sdiv, Span };
