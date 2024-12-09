import React from "react";
import { Container, Div, Textdiv, Img, P, H1, Button } from "./style";
import book from "../../assets/img/not-img/book.png";
export default function () {
  return (
    <Container>
      <Div>
        <Textdiv>
          <H1>Not just another HR resource.</H1>
          <P>Simple. Entertaining. Informative.</P>
          <Button>Download E-book</Button>
        </Textdiv>
        <Img src={book} alt="hero-img" />
      </Div>
    </Container>
  );
}
