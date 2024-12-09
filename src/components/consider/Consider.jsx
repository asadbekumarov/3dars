import React from "react";
import {
  Container,
  Div,
  Fdiv,
  Idiv,
  Img,
  P,
  H1,
  H4,
  Sdiv,
  Span,
  Pi,
} from "./style";
import star from "../../assets/img/consider-img/star.png";
import jelf from "../../assets/img/consider-img/jelf.png";
import search from "../../assets/img/consider-img/search.png";
export default function consider() {
  return (
    <Div>
      <Container>
        <H1 data-aos="zoom-in-up">HR Production of the Highest Quality</H1>
        <Pi data-aos="zoom-in-up">HR is for everyone. Clerksy can help you.</Pi>
        <Fdiv>
          <Idiv ata-aos="zoom-in-right">
            <Img src={jelf} alt="" />
            <H4>Protect Your Company</H4>
            <Sdiv>
              <Span></Span>
              <P>Compliance Audits dfkpnbaponvp Training</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Employee Data Storage</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Policy Drafting</P>
            </Sdiv>
          </Idiv>
          <Idiv data-aos="zoom-in-up">
            <Img src={star} alt="" />
            <H4>Set Your Employees Up For Success</H4>
            <Sdiv>
              <Span></Span>
              <P>Learning & Development</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Employee Relations</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Benefit Management</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Employee Performance</P>
            </Sdiv>
          </Idiv>
          <Idiv ata-aos="zoom-in-left">
            <Img src={search} alt="" />
            <H4>Know Your Industry's Legal Landscape</H4>
            <Sdiv>
              <Span></Span>
              <P>Work Place Investigations</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Employee Mediations</P>
            </Sdiv>
            <Sdiv>
              <Span></Span>
              <P>Performance Tracking</P>
            </Sdiv>
          </Idiv>
        </Fdiv>
      </Container>
    </Div>
  );
}
