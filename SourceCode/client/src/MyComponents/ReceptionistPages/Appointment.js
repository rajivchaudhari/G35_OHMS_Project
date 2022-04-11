import { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';
import DrAppointments from './DrAppointments';
import PatientService from '../../Services/PatientService';

class Appointment extends Component {
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
            did: this.props.match.params.did,
            patient: []
        }
    }
    componentDidMount() {
        PatientService.getPatientByDoctorId(this.state.did).then((res) => {
            console.log(this.state.did)
            this.setState({ patient: res.data })
            console.log("hellow")
            console.log(this.state.did)

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
                                <div><Link to="/DrAppointments" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                            </td>
                            <td>
                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                            </td>
                        </div>
                        <div>
                            <h3 className="title text-center Adiv"><b>Appointments List</b></h3>
                        </div>
                        <div className="container">
                            <table className="table table-light table-striped text-center">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col">APPOINTMENT ID</th>
                                        <th scope="col">PATIENT NAME</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">TIME SLOT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.patient.map((appointment) => (
                                        <tr>
                                            <td>{appointment.id}</td>
                                            <td>{appointment?.patient?.pname}</td>
                                            <td>{appointment.adate}</td>
                                            <td>{appointment.slot}</td>
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
} export default Appointment;
