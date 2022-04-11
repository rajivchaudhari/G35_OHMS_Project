import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';

export default class AdminHomePage extends Component {
    constructor(props) {
        super(props);
        const email = sessionStorage.getItem("email")
        let loggedIn = true
        if (email == null) {
            loggedIn = false
        }
        this.state = {
            email: email,
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (
            <>
                <div className="PWall">
                    <div className="view-margin">
                        <Header /><br />
                        <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div><br />
                        <table className="T1">
                            <tr>
                                <td>
                                    <div >
                                        <tr>
                                            <img className="aimg" height="150px" src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/nurse-female.svg" alt="" />
                                        </tr><br />
                                        <tr>
                                            <div className="centered"><Link to="addStaff" className="btn btn-primary rbtn">Add Staff</Link></div>
                                        </tr>
                                    </div>
                                </td>
                                <td>
                                    <tr>
                                        <img className="aimg" height="150px" src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/doctor-female.svg" alt="" />
                                    </tr><br />
                                    <tr>
                                        <div><Link to="viewStaff" className="btn btn-primary rbtn">View All Staff</Link></div>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <img className="rimg" height="150px" src=" https://uxwing.com/wp-content/themes/uxwing/download/15-health-sickness-organs/injury.svg" alt="" />
                                    </tr><br />
                                    <tr>
                                        <div ><Link to="viewPatients" className="btn btn-primary rbtn">View All Patients</Link></div>
                                    </tr>
                                </td>

                                <td>
                                    <tr>
                                        <img height="150px" src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/doctor-team.svg" alt="" />
                                    </tr><br />
                                    <tr>
                                        <div><Link to="viewDoctor" className="btn btn-primary rbtn abtn">View All Doctors</Link></div>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <img height="150px" className="aimg" src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/doctor-male.svg" alt="" />
                                    </tr><br />
                                    <tr>
                                        <div><Link to="addDoctor" className="btn btn-primary rbtn">Add Doctor</Link></div>
                                    </tr>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}
