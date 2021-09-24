import React, { useContext } from "react";
import ToDo from "./components/todo/ToDo";
import SettingsContext from "./context/settings";
import Auth, { AuthContext } from "./context/auth";
import { If, Else, Then } from "react-if";
import "./App.css";
import Sign from "./components/sign/Sign";

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <Auth>
        <If condition={loggedIn == true}>
          {console.log("from app comp",loggedIn)}
          <Then>
            <SettingsContext>
              <ToDo />
            </SettingsContext>
          </Then>
          <Else>
            <Sign />
          </Else>
        </If>
      </Auth>
    </>
  );
}

export default App;
