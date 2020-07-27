import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/homePage";
import { AddNewMedForm } from "./components/addNewMed";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Button } from "reactstrap";
//import Button from "@material-ui/core/Button";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/AddNew" exact component={AddNewMedForm} />
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
