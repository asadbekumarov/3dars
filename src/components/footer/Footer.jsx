import React from "react";
import {
  Foooter,
  Container,
  Div,
  Idiv,
  Fmg,
  Tmg,
  Lmg,
  Img,
  Imgi,
  H2,
  P,
  Span,
  Pi,
  Ddiv,
} from "./style";
import facebook from "../../assets/img/footer-img/facebook.png";
import twitter from "../../assets/img/footer-img/twwiter.png";
import linkedin from "../../assets/img/footer-img/link.png";
import instagram from "../../assets/img/footer-img/lstagram.png";
import logo from "../../assets/img/footer-img/logo.png";

export default function Footer() {
  return (
    <Foooter>
      <Container>
        <Div>
          <Imgi src={logo} alt="" />
          <H2>A people company.</H2>
          <Idiv>
            <Fmg src={facebook} alt="" />
            <Tmg src={twitter} alt="" />
            <Lmg src={linkedin} alt="" />
            <Img src={instagram} alt="" />
          </Idiv>
        </Div>
        <Ddiv>
          <P>
            © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy,
            Inc.
          </P>
          <Span>
            <Pi>Privacy Policy</Pi>
            <Pi>Terms of Service</Pi>
            <Pi>GDPR</Pi>
            <Pi>Careers</Pi>
            <Pi>Press Kit</Pi>
          </Span>
        </Ddiv>
      </Container>
    </Foooter>
  );
}
