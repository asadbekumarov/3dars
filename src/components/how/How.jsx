import React from "react";
import { Container, Div, Textdiv, Img, P, H1 } from "./style";
import cofe from "../../assets/img/how-img/cofe.png";
export default function () {
  return (
    <Container>
      <Div>
        <Textdiv>
          <H1 data-aos="zoom-in-right">How the scenes fit together</H1>
          <P data-aos="zoom-in-right">
            Employee Training & Development, Diversity & Inclusion Programs, and
            Conflict Resolution.
          </P>
        </Textdiv>
        <Img data-aos="zoom-in-left" src={cofe} alt="cofe-img" />
      </Div>
    </Container>
  );
}
