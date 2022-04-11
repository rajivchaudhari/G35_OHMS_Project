import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PatientService from '../../Services/PatientService';
import Footer from '../Footer';
import Header from '../Header';
class EditProfile extends Component {
    constructor(props) {
        super(props);
        const pid = sessionStorage.getItem("pid")

        let loggedIn = true
        if (pid == null) {
            loggedIn = false
        }
        this.state = {
            pid: pid,
            pname: "",
            pgender: "",
            pdob: "",
            paddress: "",
            pphone: "",
            loggedIn
        }
        this.changePnameHandler = this.changePnameHandler.bind(this);
        this.changePgenderHandler = this.changePgenderHandler.bind(this);
        this.changePdobHandler = this.changePdobHandler.bind(this);
        this.changePaddressHandler = this.changePaddressHandler.bind(this);
        this.changePphoneHandler = this.changePphoneHandler.bind(this);
        this.updatePatient = this.updatePatient.bind(this);

    }
    changePnameHandler = (event) => {
        this.setState({ pname: event.target.value });
    };
    changePgenderHandler = (event) => {
        this.setState({ pgender: event.target.value });
    };
    changePdobHandler = (event) => {
        this.setState({ pdob: event.target.value });
    };
    changePaddressHandler = (event) => {
        this.setState({ paddress: event.target.value });
    };
    changePphoneHandler = (event) => {
        this.setState({ pphone: event.target.value });
    };

    componentDidMount() {
        PatientService.showPatientByPid(this.state.pid).then((res) => {
            let patientDetails = res.data;
            this.setState({
                pname: patientDetails.pname,
                pgender: patientDetails.pgender,
                pdob: patientDetails.pdob,
                paddress: patientDetails.paddress,
                pphone: patientDetails.pphone

            })
        })
    }

    updatePatient = (e) => {
        e.preventDefault();

        let patientDetails = {
            pname: this.state.pname,
            pgender: this.state.pgender,
            pdob: this.state.pdob,
            paddress: this.state.paddress,
            pphone: this.state.pphone

        };
        console.log('patientDetails =>' + JSON.stringify(patientDetails));
        PatientService.editPatient(this.state.pid, patientDetails).then((res) => {
            alert("Sucessfully updated ")
            window.location = '/PatientHomePage';
        })

    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/HomePage" />
        }
        return (

            <>
                <div className="inWall headmargin">
                <Header/><br/>
                    <div>
                        <td>
                            <div><Link to="/PatientHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                        </td>
                        <td>
                            <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                        </td>
                    </div>
                    <div>
                        <div className="Center">
                            <div className="Centerinside Sgradient">
                                <h3 className="PlaceLogin title"><br /><b>Enter Details</b></h3><br /><br />
                                <form className="form">
                                    <div>
                                        <tr>
                                            <td className="intitle"><b>Name-</b></td>
                                            <td className="Rname "><input className="Circular PlaceContent" type="text" placeholder="Enter Name"
                                                value={this.state.pname}
                                                onChange={this.changePnameHandler} /></td>
                                        </tr><br />
                                    </div>
                                    <div >
                                        <td className="intitle"><b>Gender- </b></td>
                                        <td >
                                            <input className="Rgenderdiv" type="radio" id="male" name="Gender" value="Male" onChange={this.changePgenderHandler} />
                                            <label for="male"> Male</label>
                                            <input className="Rgender" type="radio" id="female" name="Gender" value="female" onChange={this.changePgenderHandler} />
                                            <label for="female"> Female</label>
                                            <input className="Rgender" type="radio" id="other" name="Gender" value="Other" onChange={this.changePgenderHandler} />
                                            <label for="other"> Other</label>
                                        </td>
                                    </div><br />
                                    <div>
                                        <label for="dob" className="intitle"><b>Birth Date:</b></label>
                                        <input className="Rgenderdiv date Circular" type="date" id="dob" name="birthday"
                                            value={this.state.pdob}
                                            onChange={this.changePdobHandler} />
                                    </div><br />
                                    <div>
                                        <td className="intitle"><b>Address-</b></td>
                                        <td className="addmrg "><input className="Circular PlaceContent" type="text" placeholder="Enter Address"
                                            value={this.state.paddress}
                                            onChange={this.changePaddressHandler} /></td>
                                    </div><br />
                                    <div>
                                        <td className="intitle"><b>Phone No-</b></td>
                                        <td className="passmrg"><input type="number" placeholder="Enter number" className="Circular PlaceContent "
                                            value={this.state.pphone}
                                            onChange={this.changePphoneHandler} /></td>
                                    </div><br /><br />
                                    <div className="PlaceSubmit">
                                        <input className="Circular PlaceBtn title btn btn-primary me-md-2" type="submit" value="Update"
                                            onClick={this.updatePatient} />
                                    </div> <br /><br />
                                </form>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default EditProfile;
