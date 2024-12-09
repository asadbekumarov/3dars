import React from "react";
import {
  Container,
  Div,
  Fdiv,
  Idiv,
  Img,
  P,
  H1,
  H4,
  Sdiv,
  Vmg,
  Pi,
} from "./style";
import arrow from "../../assets/img/its-img/arrow.png";
import arrow360 from "../../assets/img/its-img/arrow360.png";
import vector from "../../assets/img/its-img/vector.png";
export default function () {
  return (
    <Div>
      <Container>
        <H1>It's easy as 1, 2, 3</H1>
        <Pi>Clerksy can help use your unique business needs. Here's how:</Pi>
        <Fdiv>
          <Idiv>
            <Sdiv>
              <P>Fill out a form and tell us what you're looking for:</P>
              <H4>5 minutes</H4>
            </Sdiv>
            <Img src={arrow} alt="" />
          </Idiv>
          <Idiv>
            <Sdiv>
              <P>Time it will take a Clerksy rep to follow up:</P>
              <H4>24 hours</H4>
            </Sdiv>
            <Img src={arrow360} alt="" />
          </Idiv>
          <Idiv>
            <Vmg src={vector} alt="" />
          </Idiv>
        </Fdiv>
      </Container>
    </Div>
  );
}