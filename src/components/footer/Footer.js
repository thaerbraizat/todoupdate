import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
import './footer.css';
function Footer(props) {
  return (
    <>
      <Navbar className="footer">
        <Navbar.Group align={Alignment.CENTER}>
          <Navbar.Heading>&copy; 2021 IBRAHEM AL-OMARI </Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </>
  );
}

export default Footer;
