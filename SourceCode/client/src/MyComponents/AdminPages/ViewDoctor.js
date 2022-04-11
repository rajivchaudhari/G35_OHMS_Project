import React, { Component } from "react";
import Header from "./../Header";
import { Link, Redirect } from "react-router-dom";
import Footer from "./../Footer";
import DoctorService from "../../Services/DoctorService";

class ViewDoctor extends Component {
  constructor(props) {
    super(props);
    const email = sessionStorage.getItem("email");
    let loggedIn = true;
    if (email == null) {
      loggedIn = false;
    }
    this.state = {
      staff: [],
      loggedIn,
      email: email,
    };
  }

  componentDidMount() {
    DoctorService.ViewDoctors().then((res) => {
      this.setState({ staff: res.data });
    });
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/HomePage" />;
    }
    return (
      <>
        <div className="inWall ">
          <div className="view-table-margin">
            <Header />
            <br />
            <div>
              <td>
                <div>
                  <Link
                    to="/AdminHomePage"
                    className="btn btn-primary me-md-2 backbtn "
                  >
                    Back
                  </Link>
                </div>
                <br />
              </td>
              <td>
                <div>
                  <Link
                    to="/HomePage"
                    className="btn btn-primary me-md-2 Logout"
                  >
                    Log Out
                  </Link>
                </div>
              </td>
            </div>
            <div>
              <h3 className="text-center title Adiv">
                <b>All Doctor List</b>
              </h3>
            </div>
            <div className="container">
              <table className="table table-success table-striped text-center table-hover tablemrgn">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Education</th>
                    <th scope="col">Speciality</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.staff
                    .filter((staff) => staff.doctor != null)
                    .map((staff) => (
                      <tr>
                        <th scope="row">{staff?.doctor?.id}</th>
                        <td>{staff.sname}</td>
                        <td>{staff.sgender}</td>
                        <td>{staff.sphone}</td>
                        <td>{staff.saddress}</td>
                        <td>{staff?.doctor?.deducation}</td>
                        <td>{staff?.doctor?.dspeciality}</td>
                       
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default ViewDoctor;
