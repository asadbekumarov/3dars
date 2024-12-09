import React from "react";
import { Section, Container, Div, Textdiv, Img, P, H1 } from "./style";
import hero from "../../assets/img/hero-img/hero.png";
export default function () {
  return (
    <Section>
      <Container>
        <Div>
          <Textdiv>
            <H1>Running the show has never been so easy.</H1>
            <P>
              Ready to put the human back in HR? Clerksy helps you set the stage
              with an inclusive and compliant workplace.
            </P>
          </Textdiv>
          <Img src={hero} alt="hero-img" />
        </Div>
      </Container>
    </Section>
  );
}
