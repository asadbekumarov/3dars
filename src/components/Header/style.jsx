import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #163a24;
`;
const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Img = styled.img`
  width: 153px;
  height: 58px;
`;
const Div = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Linkdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  color: #fbfaf7;
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
`;
export { StyledHeader, Container, Img, Div, Linkdiv, P, Button };
