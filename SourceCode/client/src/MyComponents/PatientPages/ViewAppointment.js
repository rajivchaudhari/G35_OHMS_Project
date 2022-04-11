import React, { Component } from "react";
import Header from "./../Header";
import { Link, Redirect } from "react-router-dom";
import PatientService from "../../Services/PatientService";
import Footer from './../Footer';
import Appointment from './../ReceptionistPages/Appointment';

class ViewAppointment extends Component {

    constructor(props) {
        super(props);

        const pid = sessionStorage.getItem("pid")

        let loggedIn = true
        if (pid == null) {
            loggedIn = false
        }

        this.state = {
            appointment: [],
            pid: pid,
            loggedIn
        }
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }

    componentDidMount() {
        PatientService.showAppointmentByPid(this.state.pid).then((res) => {
            console.log((res.login));
            this.setState({ appointment: res.data })

        });
    }

    deleteAppointment(aid) {
        PatientService.deleteAppointment(aid).then((res) => {
            this.setState({
                appointment: this.state.appointment.filter(
                    (appointment) => appointment.aid !== aid
                ),
            });
        });
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }


        return (
            <>
                <div className="inWall ">
                    <div className="view-table-margin">
                    <nav className="navbar navbar-expand-lg navbar-light header">
                    <div>
                    <a href="/HomePage"><img className="imgheight" src="http://localhost:3000/images/nLogo.jpg" /></a>
                    </div>
                    <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav mr-auto">̥
                        <li className="nav-item">
                        <a className="nav-link" href="HomePage"><b>Home</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="AboutUs"><b>About Us</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="Disclaimer"><b>Facilities</b></a>
                        </li>
                    </ul>
                    </div>
                </nav><br />
                        <div>
                            <td>
                                <div><Link to="/PatientHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                            </td>
                            <td>
                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                            </td>
                        </div>
                        <div>
                            <h3 className="text-center title Adiv"><b>My Appointment</b></h3>
                        </div>
                        <div className="container">
                            <table className="table table-success table-striped text-center table-hover ">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col">ID</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">TIMESLOT</th>
                                        <th scope="col">SYMPTOMS</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.state.appointment.map((appointment) => (
                                        <tr >
                                            <th scope="row">{appointment.id}</th>
                                            <td>{appointment.adate}</td>
                                            <td>{appointment.slot}</td>
                                            <td>{appointment.asymptoms}</td>

                                            <td>
                                                <button onClick={() => this.deleteAppointment(appointment.id)}
                                                    className="btn btn-danger" >delete</button>
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
export default ViewAppointment;




