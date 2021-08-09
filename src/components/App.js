/* ------------------------------ Dependencies ------------------------------ */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/* ------------------------------- Components ------------------------------- */
import HomePage from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/characters/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
