import { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';
import PatientService from '../../Services/PatientService';
import CreateInvoice from './CreateInvoice';
import ViewAppointment from '../PatientPages/ViewAppointment';

export class ViewAptbyRecp extends Component {
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
            appointments: [],
            invoice: [],
            sid: "",
            iid: "",
            aid: ""
        }

        this.createInvoice = this.CreateInvoice.bind(this);
        this.viewInvoice = this.viewInvoice.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this)

    }
    componentDidMount() {
        PatientService.getPatientWhoHaveAppointment().then((res) => {

            this.setState({ appointments: res.data })

        },


        );






    };


 
    CreateInvoice(aid) {
//console.log("this is my aid "+aid)
        PatientService.showinvoice(aid).then((res) => {
            //console.log("this is my aid "+res.data)
            this.setState({ iid: res.data[0].id })
           // console.log("this is my aid "+res.iid)
            alert('You already Generated invoice for this appointment')
           // window.location = '/ViewAptbyRecp'
        }
        ).catch(res => {

            this.props.history.push(`/CreateInvoice/${aid}`)
        })
    }
    viewInvoice(aid) {
        window.location = `/viewInvoice/${aid}`
         //this.props.history.push(`/viewInvoice/${aid}`);
    }
    deleteAppointment(aid) {
       
        PatientService.deleteAppointment(aid).then((res) => {
            this.setState({
                appointments: this.state.appointments.filter(
                    (appointments) => appointments.aid !== aid
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
                                <div><Link to="/RecepHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
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
                                    <th scope="col">ID</th>
                                        <th scope="col">PATIENT NAME</th>
                                        <th scope="col">TIME SLOT</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">CREATE INVOICE</th>
                                        <th scope="col">VIEW INVOICE</th>
                                        <th scope="col">CANCEL APPOINTMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.appointments.map((appointment) => (
                                        <tr>
                                            <td>{appointment.id}</td>
                                            <td>{appointment?.patient?.pname}</td>
                                            <td>{appointment.slot}</td>
                                            <td>{appointment.adate}</td>

                                            <td>
                                                <button type="button" className="btn btn-success btn-sm"
                                                    onClick={() => this.CreateInvoice(appointment.id)
                                                    }
                                                >Create</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-success btn-sm"

                                                    onClick={() => this.viewInvoice(appointment.id)}
                                                >View</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => this.deleteAppointment(appointment.id)}>Cancel</button>
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

export default ViewAptbyRecp
