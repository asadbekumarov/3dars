import React from "react";
import { Div, Container, Rmg, Lmg, H2, P, Button } from "./style";
import right from "../../assets/img/get-img/right.png";
import left from "../../assets/img/get-img/left.png";
export default function Get() {
  return (
    <Div>
      <Rmg src={right} alt="hero-img" />
      <Container>
        <H2>Get Started With Clerksy</H2>
        <P>Make sure your business puts people first.</P>
        <Button>Book a Free Discovery Call</Button>
      </Container>
      <Lmg src={left} alt="hero-img" />
    </Div>
  );
}
