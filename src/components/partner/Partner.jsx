import React from "react";
import {
  Container,
  Div,
  Fdiv,
  Pdiv,
  Img,
  Pimg,
  Textdiv,
  P,
  H1,
  IDiv,
  Hp1,
  A,
} from "./style";
import partner from "../../assets/img/partner-img/Frame.png";
import partner2 from "../../assets/img/partner-img/Frame2.png";
import stripe from "../../assets/img/partner-img/stripe.png";
import google from "../../assets/img/partner-img/google.png";
import notion from "../../assets/img/partner-img/notion.png";
import gusto from "../../assets/img/partner-img/gusto.png";
import airca from "../../assets/img/partner-img/airca.png";
export default function () {
  return (
    <Container>
      <Div>
        <Fdiv>
          <Pimg src={partner} alt="partner" />
          <Textdiv>
            <H1>Put the human back in HR.</H1>
            <P>
              Your employees are the real stars. Show the love and help them
              perform!
            </P>
          </Textdiv>
        </Fdiv>
        <Fdiv>
          <Textdiv>
            <H1>You don’t have to play all the parts.</H1>
            <P>
              Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
              help.
            </P>
          </Textdiv>
          <Pimg src={partner2} alt="partner" />
        </Fdiv>
        <Pdiv>
          <Hp1>We partner with the best</Hp1>
          <IDiv>
            <A href="#">
              <Img src={stripe} alt="" />
            </A>
            <A href="">
              <Img src={google} alt="" />
            </A>
            <A href="">
              <Img src={notion} alt="" />
            </A>
            <A href="">
              <Img src={gusto} alt="" />
            </A>
            <A href="">
              <Img src={airca} alt="" />
            </A>
          </IDiv>
        </Pdiv>
      </Div>
    </Container>
  );
}
