import React from "react";
import { Container, Div, Fdiv, Idiv, Img, P, H1 } from "./style";
import girl from "../../assets/img/result-img/girl.png";
import jelf from "../../assets/img/result-img/jelf.png";
import shield from "../../assets/img/result-img/shield.png";
import sms from "../../assets/img/result-img/sms.png";
export default function result() {
  return (
    <Div>
      <Container>
        <H1 data-aos="zoom-in-up">HR Production of the Highest Quality</H1>
        <Fdiv>
          <Idiv data-aos="zoom-in-right"  >
            <Img src={sms} alt="" />
            <P>Create a Healthy Work Environment</P>
          </Idiv>
          <Idiv data-aos="zoom-in-right"  >
            <Img src={shield} alt="" />
            <P>Manages & Stores Important Documents</P>
          </Idiv>
          <Idiv data-aos="zoom-in-left">
            <Img src={jelf} alt="" />
            <P>Protects Your Business Just in Case</P>
          </Idiv>
          <Idiv data-aos="zoom-in-left">
            <Img src={girl} alt="" />
            <P>Educates & Informs Employee Expectations</P>
          </Idiv>
        </Fdiv>
      </Container>
    </Div>
  );
}
