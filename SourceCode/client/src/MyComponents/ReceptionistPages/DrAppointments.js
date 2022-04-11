import React, { Component } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import { Link, Redirect } from 'react-router-dom';
import RecepHomePage from './RecepHomePage';
import RecepLogin from './../StaffPage/RecepLogin';
import { Appointment } from './Appointment';
import DoctorService from '../../Services/DoctorService';

class DrAppointments extends Component {
      constructor(props) {
            super(props);
            const email = sessionStorage.getItem("email")
            console.log(email)

            let loggedIn = true
            if (email == null) {
                  loggedIn = false
            }

            this.state = {
                  loggedIn,
                  email: email,
                  staff: [],
            }


      }
      componentDidMount() {
            DoctorService.ViewDoctors().then((res) => {

                  this.setState({ staff: res.data })

            });
      }

      ViewAppointment(did) {
            this.props.history.push(`/Appointment/${did}`);
      }

      render() {
            if (this.state.loggedIn === false) {
                  return <Redirect to="/HomePage" />
            }

            return (
                  <>

                        <div className="inWall ">
                              <div className="view-table-margin">
                                    <Header /><br />
                                    <div>
                                          <td>
                                                <div><Link to="/RecepHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                                          </td>
                                          <td>
                                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                                          </td>
                                    </div>
                                    <div>
                                          <h3 className="text-center title Adiv"><b>All Doctor List</b></h3>
                                    </div>

                                    <div className="container">
                                          <table className="table table-success table-striped text-center table-hover tablemrgn">
                                                <thead>
                                                      <tr className="table-dark">

                                                            <th scope="col">ID</th>
                                                            <th scope="col">NAME</th>
                                                            <th scope="col"></th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {this.state.staff.filter((staff) => staff.doctor != null).map((staff) => (
                                                            <tr>
                                                                  <td>{staff?.doctor?.id}</td>
                                                                  <td>{staff.sname}</td>
                                                                  <td>
                                                                        <button onClick={() => this.ViewAppointment(staff?.doctor?.id)}
                                                                              className="btn btn-info" >View Appointment</button>
                                                                  </td>
                                                            </tr>))}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>

                        <Footer />


                  </>
            )
      }
}
export default DrAppointments;
