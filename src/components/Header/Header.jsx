import React from "react";
import { StyledHeader, Container, Div, Linkdiv, Img, P, Button } from "./style";
import logo from "../../assets/img/header-img/logo.svg";
function Header() {
  return (
    <StyledHeader>
      <Container>
        <Div>
          <Img src={logo} alt="Logo" />
          <Linkdiv>
            <P>Log In</P>
            <P>844-332-6440</P>
            <Button>Get Started</Button>
          </Linkdiv>
        </Div>
      </Container>
    </StyledHeader>
  );
}
export default Header;
