import React, { Component } from "react";
import Header from "./../Header";
import { Link, Redirect } from "react-router-dom";
import Footer from "./../Footer";
import AdminService from "../../Services/AdminService";
import AdminHomePage from "./AdminHomePage";
import AdminLogin from "./AdminLogin";

class ViewStaff extends Component {
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
    this.editStaff = this.editStaff.bind(this);
    this.deleteStaff = this.deleteStaff.bind(this);
  }

  componentDidMount() {
    AdminService.viewStaff().then((res) => {
      console.log(res.login);
      this.setState({ staff: res.data });
    });
  }
  editStaff(id) {
    this.props.history.push(`/editStaff/${id}`);
  }

  deleteStaff(sid) {
    AdminService.deleteStaff(sid).then((res) => {
      this.setState({
        staff: this.state.staff.filter((staff) => staff.sid !== sid),
      });
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
                <b>All Staff List</b>
              </h3>
            </div>
            <div className="container">
              <table className="table table-success table-striped text-center table-hover tablemrgn">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">ADDRESS</th>
                    <th scope="col">ROLE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.staff.map((staff) => (
                    <tr>
                      <th scope="row">{staff.id}</th>
                      <td>{staff.sname}</td>
                      <td>{staff.sgender}</td>
                      <td>{staff.sphone}</td>
                      <td>{staff.saddress}</td>
                      <td>
                        {staff?.doctor?.login?.role}
                        {staff?.login?.role}
                      </td>
                      <td>
                        {staff?.doctor?.login?.email}
                        {staff?.login?.email}
                      </td>
                      <td>
                        <button
                          onClick={() => this.editStaff(staff.id)}
                          className="btn btn-info"
                        >
                          update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => this.deleteStaff(staff.id)}
                          className="btn btn-danger"
                        >
                          delete
                        </button>
                      </td>
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
export default ViewStaff;
