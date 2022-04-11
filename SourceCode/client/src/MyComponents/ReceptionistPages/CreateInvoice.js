import { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link, Redirect } from 'react-router-dom';
import PatientService from "../../Services/PatientService";


class CreateInvoice extends Component {
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
            aid: this.props.match.params.aid,
            idate: "",
            ilabfee: "",
            imedicalfee: "",
            description: "",
            idoctorfee: "",
            iotherfee: "",
            gst: "",
            dummy: []


        }

        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeLabfeeHandler = this.changeLabfeeHandler.bind(this);
        this.changeMedicalfeeHandler = this.changeMedicalfeeHandler.bind(this);
        this.changeDoctorfeeHandler = this.changeDoctorfeeHandler.bind(this);
        this.changeOtherfeeHandler = this.changeOtherfeeHandler.bind(this);
        this.changeGstHandler = this.changeGstHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.submitInvoiceDetails = this.submitInvoiceDetails.bind(this);

    }


    changeDateHandler = (event) => {
        this.setState({ idate: event.target.value });
    };
    changeLabfeeHandler = (event) => {
        this.setState({ ilabfee: event.target.value });
    }
    changeMedicalfeeHandler = (event) => {
        this.setState({ imedicalfee: event.target.value });
    }
    changeDoctorfeeHandler = (event) => {
        this.setState({ idoctorfee: event.target.value });
    };
    changeOtherfeeHandler = (event) => {
        this.setState({ iotherfee: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeGstHandler = (event) => {
        this.setState({ gst: event.target.value });
    }


    submitInvoiceDetails = (e) => {
        e.preventDefault();
        let invoiceDetails = {




            idate: this.state.idate,
            ilabtestfees: this.state.ilabfee,
            imedicinefees: this.state.imedicalfee,
            idoctorfees: this.state.idoctorfee,
            iotherfees: this.state.iotherfee,
            description: this.state.description,
            gst: this.state.gst

        };
        console.log('invoiceDetails =>' + JSON.stringify(invoiceDetails));
        PatientService.makeInvoice(this.state.aid, invoiceDetails).then((res) => {
            alert("Invoice Generated ")
            window.location = '/ViewAptbyRecp';
        })
    }


    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }

        return (

            <>
                <div className="inWall headmargin">
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
                        <div>


                        </div>
                        <div>
                            <td>
                                <div><Link to="/RecepHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                            </td>
                            <td>
                                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                            </td>
                        </div>
                        <div className="invcenter">
                            <div className="Centerinside Sgradient">
                                <h3 className="Stitle title "><br /><b>Enter Invoice Details</b></h3><br /><br />
                                <form className="form">
                                    <div>
                                        <tr>
                                            <td className="intitle"><b>Medicalfee-</b></td>
                                            <td className="Rname "><input className="Circular PlaceContent" type="text" placeholder="Enter Medical charges"
                                                value={this.state.imedicalfee}
                                                onChange={this.changeMedicalfeeHandler}
                                            /></td>
                                        </tr><br />
                                        <tr>
                                            <td className="intitle"><b>Labfee-</b></td>
                                            <td className="lab "><input className="Circular PlaceContent" type="text" placeholder="Enter Lab charges"
                                                value={this.state.ilabfee}
                                                onChange={this.changeLabfeeHandler}
                                            /></td>
                                        </tr><br />
                                        <tr>
                                            <td className="intitle"><b>Doctorfee-</b></td>
                                            <td className="dfee "><input className="Circular PlaceContent" type="text" placeholder="Enter Doctor charges"
                                                value={this.state.idoctorfee}
                                                onChange={this.changeDoctorfeeHandler}
                                            /></td>
                                        </tr><br />
                                        <tr>
                                            <td className="intitle"><b>Otherfee-</b></td>
                                            <td className="ofee "><input className="Circular PlaceContent" type="text" placeholder="Enter Other charges"
                                                value={this.state.iotherfee}
                                                onChange={this.changeOtherfeeHandler}
                                            /></td>
                                        </tr><br />
                                        <tr>
                                            <td className="intitle"><b>Prescription-</b></td>
                                            <td className="dis "><input className="Circular PlaceContent" type="text" placeholder="Enter Prescription"
                                                value={this.state.description}
                                                onChange={this.changeDescriptionHandler}
                                            /></td>
                                        </tr><br />

                                        <tr>
                                            <td className="intitle"><b>GST-</b></td>
                                            <td className="gst "><input className="Circular PlaceContent" type="text" placeholder="Enter GST"
                                                value={this.state.gst}
                                                onChange={this.changeGstHandler}
                                            /></td>
                                        </tr><br />
                                    </div>
                                    <div>
                                        <label for="#" className="intitle"><b> Date-</b></label>
                                        <input className=" da date Circular" type="date" id="#" name="#"
                                            value={this.state.idate}
                                            onChange={this.changeDateHandler} />
                                    </div><br />
                                    <br />
                                    <div className="PlaceSubmit">
                                        <input className="title Circular PlaceBtn btn btn-primary me-md-2" type="submit" value="Submit"
                                            onClick={this.submitInvoiceDetails}
                                        />
                                    </div><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <Footer />
            </>


        )
    }
}
export default CreateInvoice;