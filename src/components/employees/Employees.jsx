import React from "react";
import { Div, Container, Img, H2, P } from "./style";
import person from "../../assets/img/employees-img/person.png";
export default function Employees() {
  return (
    <Div>
      <Container>
        <H2>Employees come in all shapes and <br /> sizes. Find the right fit.</H2>
        <P>
          Focus on casting and screening. Let Clerksy handle contracts, resolve
          any on set-conflicts <br /> and make sure you are compliant with work and
          safety boards.
        </P>
        <Img src={person} alt="" />
      </Container>
    </Div>
  );
}
