import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from "./Component/Navbaar";
import Home from "./Component/Home";
import Registration from "./Component/Registration";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Edit from "./Component/Edit";
import Details from "./Component/Details";
import Login from "./Component/Login";

function App() {
  return (
    <>
  
      <Navbaar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={Details} />
      </Switch>
    
    </>
  );
}

export default App;
