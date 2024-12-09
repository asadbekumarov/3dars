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
            <H2>Stay up to date!</H2>
            <Pi>Sign up for the latest Clerksy news.</Pi>
          </div>
          <Idiv>
            <Bdiv>
              <Input type="text" />
              <Button>Sign Up</Button>
            </Bdiv>
            <P>
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
