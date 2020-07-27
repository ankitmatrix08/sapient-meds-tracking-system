import * as React from "react";
import { Component } from "react";
import "./medicine.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from "moment";
import { Alert } from "reactstrap";
import { IMedsInfo } from "../models/IMedsInfo";

export interface MedicineProps {
  medsList: IMedsInfo[];
  onMedEditClick: (medId: number) => void;
}

export interface MedicineState {
  responseMessage: string;
}

export class Medicine extends React.Component<MedicineProps, MedicineState> {
  state = { responseMessage: "" };
  constructor(props: MedicineProps, state: MedicineState) {
    super(props);
  }

  componentDidMount(): void {}

  render() {
    const Columns = [
      { Header: "Full Name", accessor: "fullName" },
      { Header: "Brand", accessor: "brand" },
      { Header: "Price", accessor: "price" },
      { Header: "Quantity", accessor: "qty" },
      {
        Header: "Expiry Date",
        id: "index",
        accessor: (d: any) => {
          return moment(d.expDate).format("YYYY/MM/DD");
        },
      },
      {
        Header: "Edit Action",
        accessor: "medId",
        Cell: (value: any) => (
          <button
            value="Edit"
            onClick={() => this.props.onMedEditClick(value.row.medId)}
          >
            Edit Me
          </button>
        ),
      },
    ];
    return (
      <div className="table-responsive">
        {this.state.responseMessage != null &&
        this.state.responseMessage != "" ? (
          <Alert color="success">{this.state.responseMessage}</Alert>
        ) : (
          ""
        )}
        <ReactTable
          data={this.props.medsList}
          columns={Columns}
          defaultPageSize={50}
          pageSizeOptions={[5, 10, 20, 25, 50, 100]}
          className="table table-striped"
        />
      </div>
    );
  }
}

export default Medicine;
