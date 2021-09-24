import React,{useContext} from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

function Header(props) {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do</Navbar.Heading>
          <Navbar.Divider />
          <a href="/">
            <Button icon="home" text="Home"></Button>
          </a>
          <Navbar.Divider />
          <a href="/settings">
            <Button icon="settings" text="Settings"></Button>
          </a>
          <a href="/">
          <Button style={{position:"absolute",right:"1rem"}} onClick={logout}>Logout</Button>
          </a>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}

export default Header;
