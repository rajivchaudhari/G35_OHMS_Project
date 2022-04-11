import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, Redirect } from 'react-router-dom';
import CreateInvoice from './CreateInvoice';
import PatientService from '../../Services/PatientService';

export class ViewInvoice extends Component {
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
            invoice: {},
            aid: this.props.match.params.aid,
        }
    }
    componentDidMount() {
        console.log(" inside invoice "+this.state.aid)
        PatientService.showinvoice(this.state.aid).then((res) => {
            console.log(" inside invoice "+res)
            this.setState({ invoice: res })
           this.state.invoice=res
           
        })
        .catch(error => {
            alert("please create invoice first!!!")
            window.location = '/ViewAptbyRecp'
        });
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (
            <>
                <div className="inWall  ">
                    <div className="invoice-body-margin">
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
                                <div><Link to="/ViewAptbyRecp" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                            </td>
                            <td>
                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                            </td>
                            <div className=" container invoice-wall">
                                <br /><div className="text-center title Adiv">
                                    <h2 >INVOICE</h2>
                                </div><br />
                                <div>
                                    <div className="flex-1">
                                        <div>
                                            <div className="card-body invoice-image-1">
                                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/pharmacy-prescription.svg" alt="Hospital logo" />
                                            </div>
                                            <div>
                                                <div className="Frame">
                                                    Help Line Number- +91-1234567890.<br /><br />
                                                    <b>Pune Branch</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-image-2 text-center">
                                            <div>
                                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/heart-rate.svg" alt="Heart image" />
                                            </div>
                                        </div>
                                        <div className=" margin-1" >
                                            <div>
                                                <div className="flex-1 invoice-border invoice-width">
                                                    <div>
                                                        <div>Date -</div>
                                                        <div>pid -</div>
                                                    </div>
                                                        <div>
                                                            <div>{this.state.invoice.idate}</div>
                                                            <div>{this.state.invoice.id}</div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="invoice-patient ">
                                        <div className="flex-1">
                                            <div className="p-boundry">
                                                <div >Name :</div>
                                                <div >Address :</div>
                                                <div >Phone :</div>
                                                <div >Appointment No :</div>
                                                <div >Symptoms :</div>
                                                <div >Prescription :</div>
                                            </div>
                                            
                                                <div className="p-boundry">
                                                    <div >{this.state.invoice?.appointment?.patient.pname}</div>
                                                    <div>{this.state.invoice?.appointment?.patient.paddress}</div>
                                                    <div>{this.state.invoice?.appointment?.patient.pphone}</div>
                                                    <div>{this.state.invoice?.appointment?.id}</div>
                                                    <div>{this.state.invoice?.appointment?.asymptoms}</div>
                                                    <div><p>{this.state.invoice.description}</p></div>
                                                </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="flex-1 ">
                                            <div className="p-boundry"><h5>Billing</h5></div>
                                            <div className="p-boundry "><h5>Amount</h5></div>
                                        </div>
                                        <br />
                                        <div className="flex-1">
                                            <div className="flex-1 invoice-width invoice-border">
                                                <div className="p-boundry ">
                                                    <div>Lab</div>
                                                    <div>Medical</div>
                                                    <div>Doctor</div>
                                                    <div>Other</div>
                                                    <div><h5>Total</h5></div>
                                                </div>
                                               
                                                    <div className="p-boundry">
                                                        <div>{this.state.invoice.ilabtestfees}</div>
                                                        <div>{this.state.invoice.imedicinefees}</div>
                                                        <div>{this.state.invoice.idoctorfees}</div>
                                                        <div>{this.state.invoice.iotherfees}</div>
                                                        <div>{this.state.invoice.pid}</div>
                                                        {<div>{parseInt(this.state.invoice.imedicinefees + this.state.invoice.ilabtestfees + this.state.invoice.idoctorfees + this.state.invoice.iotherfees)}</div>}
                                                    </div>
                                                
                                            </div>
                                            <div>
                                                <div><img src="https://image.shutterstock.com/image-vector/grunge-blue-hospital-accreditation-certified-260nw-680114479.jpg" className="invoice-image-2 margin-2" alt="hosptal stamp" /></div>
                                                <div className="HospName i-hospname-margin "><b >Sanjeevani Group of Hospitals</b><br /></div>
                                            </div>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default ViewInvoice;
