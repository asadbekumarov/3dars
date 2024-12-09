import React from "react";
import { Div, Container, Img, H2, P } from "./style";
import person from "../../assets/img/employees-img/person.png";
export default function Employees() {
  return (
    <Div>
      <Container>
        <H2 data-aos="zoom-in-up">
          Employees come in all shapes and <br /> sizes. Find the right fit.
        </H2>
        <P data-aos="zoom-in-up">
          Focus on casting and screening. Let Clerksy handle contracts, resolve
          any on set-conflicts <br /> and make sure you are compliant with work
          and safety boards.
        </P>
        <Img data-aos="zoom-in-up" src={person} alt="" />
      </Container>
    </Div>
  );
}
