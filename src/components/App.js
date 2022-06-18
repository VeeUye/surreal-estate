import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/app.css";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </>
  );
};

export default App;
