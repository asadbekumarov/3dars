import React from "react";
import { Container, Div, Textdiv, Img, P, H1 } from "./style";
import cofe from "../../assets/img/how-img/cofe.png";
export default function () {
  return (
    <Container>
      <Div>
        <Textdiv>
          <H1>How the scenes fit together</H1>
          <P>
            Employee Training & Development, Diversity & Inclusion Programs, and
            Conflict Resolution.
          </P>
        </Textdiv>
        <Img src={cofe} alt="cofe-img" />
      </Div>
    </Container>
  );
}
