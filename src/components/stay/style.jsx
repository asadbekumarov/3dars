import styled from "styled-components";

const Div = styled.div`
  background-color: #f2efe6;
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;

const CDiv = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  padding-bottom: 60px;
  padding-top: 60px;
`;

const P = styled.p`
  max-width: 524px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #163a24;
`;

const H2 = styled.h2`
  color: #163a24;
  font-family: Recoleta, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 54px;
  margin: 0;
`;

const Idiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bdiv = styled.div`
  display: flex;
  //   gap: 20px;
  position: relative;
`;

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 255px;
  background-color: white;
  width: 553px;
  padding: 15px 0;
  outline: none;
`;

const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px 25px;
  margin: 8px 0;
  border: none;
  border-radius: 160px;
  background-color: #15762e;
  color: #fbfaf7;
  width: 111px;
  cursor: pointer;
`;

const Span = styled.span`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #198c36;
  margin-left: 10px;
`;

const Pi = styled.p``;

export { Div, Container, CDiv, P, Pi, H2, Idiv, Bdiv, Input, Button, Span };
