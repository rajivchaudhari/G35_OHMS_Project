import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';
import PatientService from '../../Services/PatientService';

export class ViewAllPatient extends Component {
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
            patient: [],
        }
    }
    componentDidMount() {
        PatientService.viewAllPatient().then((res) => {

            this.setState({ patient: res.data })
        });
    }
    addAppointment(pid) {
        window.location = `/addAppByRecept/${pid}`

    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }


        return (
            <>
                <div className="inWall ">
                    <div className="view-table2-margin">
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
                            <h3 className="text-center title Adiv"><b>All Patient List</b></h3>
                        </div>
                        <div className="container">
                            <table className="table table-success table-striped text-center tablemrgn table-hover">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col">ID</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">GENDER</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">ADDRESS</th>
                                        <th scope="col">PHONE</th>
                                        <th scope="col">ADD APPOINTMENT</th>
                                    </tr>   
                                </thead>
                                <tbody >
                                    {this.state.patient.map((patient) => (
                                        <tr >
                                            <th scope="row">{patient.id}</th>
                                            <td>{patient.pname}</td>
                                            <td>{patient.pgender}</td>
                                            <td>{patient.pdob}</td>
                                            <td>{patient.paddress}</td>
                                            <td>{patient.pphone}</td>
                                            <td>
                                                <button onClick={() => this.addAppointment(patient.id)}
                                                    className="btn btn-info" >Add</button>
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
        )
    }
}

export default ViewAllPatient
