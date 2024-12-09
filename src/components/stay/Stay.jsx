import React from "react";
import {
  Div,
  Container,
  CDiv,
  P,
  Pi,
  H2,
  Idiv,
  Bdiv,
  Input,
  Button,
  Span,
} from "./style";

export default function stay() {
  return (
    <Div>
      <Container>
        <CDiv>
          <div>
            <H2 data-aos="zoom-in-right">Stay up to date!</H2>
            <Pi data-aos="zoom-in-right">
              Sign up for the latest Clerksy news.
            </Pi>
          </div>
          <Idiv>
            <Bdiv data-aos="zoom-in-left">
              <Input type="text" />
              <Button>Sign Up</Button>
            </Bdiv>
            <P data-aos="zoom-in-left">
              By submitting your email you agree to receive updates about
              Clerksy. You can unsubscribe at any time. View our full
              <Span>Privacy Policy</Span>
            </P>
          </Idiv>
        </CDiv>
      </Container>
    </Div>
  );
}
