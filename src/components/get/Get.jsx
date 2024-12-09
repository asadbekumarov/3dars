import React from "react";
import { Div, Container, Rmg, Lmg, H2, P, Button } from "./style";
import right from "../../assets/img/get-img/right.png";
import left from "../../assets/img/get-img/left.png";
export default function Get() {
  return (
    <Div>
      <Rmg src={right} alt="hero-img" />
      <Container>
        <H2 data-aos="zoom-in-up">Get Started With Clerksy</H2>
        <P data-aos="zoom-in-up">Make sure your business puts people first.</P>
        <Button data-aos="zoom-in-up">Book a Free Discovery Call</Button>
      </Container>
      <Lmg src={left} alt="hero-img" />
    </Div>
  );
}
