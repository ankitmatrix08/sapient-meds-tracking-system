import * as React from "react";
import { Component } from "react";
import "../App.css";
import { Medicine } from "./medicine";
import { IMedsInfo } from "../models/IMedsInfo";
import history from "../history";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export interface HomePageProps {}

export interface HomePageState {
  medsList: IMedsInfo[];
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {
    medsList: [
      {
        medId: 1,
        fullName: "Roxanne",
        brand: "Lipsy",
        price: 30.98,
        qty: 4,
        expDate: "2022-05-09",
      },
      {
        medId: 2,
        fullName: "Roxanne-2",
        brand: "Lipsy",
        price: 30.98,
        qty: 4,
        expDate: "2022-05-09",
      },
      {
        medId: 3,
        fullName: "Roxanne-3",
        brand: "Lipsy",
        price: 30.98,
        qty: 4,
        expDate: "2022-05-09",
      },
    ],
  };
  handleMedEditClick = (medId: number) => {
    console.log("I have been clicked", medId);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/AddNew" {...this.props}>
            Add New
          </Link>
          <Medicine
            medsList={this.state.medsList}
            onMedEditClick={this.handleMedEditClick}
          />
        </header>
      </div>
    );
  }
}

export default HomePage;
