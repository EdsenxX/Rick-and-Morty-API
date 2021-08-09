/* ------------------------------ Dependencies ------------------------------ */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/* ------------------------------- Components ------------------------------- */
import HomePage from "../pages/Home";
import Menu from "../components/global/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/characters/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
