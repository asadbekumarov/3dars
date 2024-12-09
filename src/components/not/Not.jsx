import React from "react";
import { Container, Div, Textdiv, Img, P, H1, Button } from "./style";
import book from "../../assets/img/not-img/book.png";
export default function () {
  return (
    <Container>
      <Div>
        <Textdiv>
          <H1 data-aos="zoom-in-right">Not just another HR resource.</H1>
          <P data-aos="zoom-in-right">Simple. Entertaining. Informative.</P>
          <Button data-aos="zoom-in-right">Download E-book</Button>
        </Textdiv>
        <Img ata-aos="zoom-in-left" src={book} alt="hero-img" />
      </Div>
    </Container>
  );
}
