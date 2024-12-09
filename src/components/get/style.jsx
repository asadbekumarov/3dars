import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #163a24;
`;
const Container = styled.div`
  text-align: center;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 119px;
`;
const Rmg = styled.img`
  width: 300px;
  height: auto;
  @media (max-width: 886px) {
    display: none;
  }
`;
const Lmg = styled.img`
  width: 300px;
  height: auto;
  @media (max-width: 886px) {
    display: none;
  }
`;
const H2 = styled.h2`
  padding-top: 114px;
  font-family: Recoleta;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  line-height: 54.25px;
  color: #fbfaf7;
  max-width: 549px;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  line-height: 27px;
  color: #fbfaf7;
  max-width: 475px;
`;

const Button = styled.button`
  text-align: center;
  background-color: #fab5a0;
  border: none;
  border-radius: 160px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.79px;
  padding: 15px 25px;
  color: #163a24;
  cursor: pointer;
`;
export { Container, Div, Rmg, Lmg, H2, P, Button };
