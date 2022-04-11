import React, { Component } from 'react'
import Header from './../Header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './../Footer';
import DoctorService from '../../Services/DoctorService';
import PatientService from '../../Services/PatientService';


class ViewDoctor extends Component {
      constructor(props) {
            super(props);
            const email = sessionStorage.getItem("email")
            let loggedIn = true
            if(email == null){
                loggedIn = false
            }
            this.state = {
                  patient: [],
                  loggedIn,
                  email:email
            }
      }
      componentDidMount() {
            PatientService.viewAllPatient().then((res) => {
                  this.setState({ patient: res.data })
            });
      }
      render() {
            if (this.state.loggedIn === false){
                  return <Redirect to="/HomePage" />
              }
            return (
                  <>
                        <div className="inWall ">
                              <div className="view-table-margin">
                                    <Header />
                                    <br />
                                    <div>
                                          <td>
                                                <div><Link to="/AdminHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                                          </td>
                                          <td>
                                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                                          </td>
                                    </div>
                                    <div>
                                          <h3 className="text-center Adiv title"><b>All Patient List</b></h3>
                                    </div>
                                    <div className="container">
                                          <table className="table table-success table-striped text-center table-hover tablemrgn">
                                                <thead>
                                                      <tr className="table-dark">
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Gender</th>
                                                            <th scope="col">DOB</th>
                                                            <th scope="col">Address</th>
                                                            <th scope="col">Phone</th>
                                                      </tr>
                                                </thead>
                                                <tbody >
                                                      {this.state.patient.map((patient) => (
                                                            <tr>
                                                                  <th scope="row">{patient.id}</th>
                                                                  <td>{patient.pname}</td>
                                                                  <td>{patient.pgender}</td>
                                                                  <td>{patient.pdob}</td>
                                                                  <td>{patient.paddress}</td>
                                                                  <td>{patient.pphone}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                        <Footer />

                  </>
            )
      }
} export default ViewDoctor
