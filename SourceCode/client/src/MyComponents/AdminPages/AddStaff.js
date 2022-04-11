
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import Header from './../Header';
import Footer from './../Footer';
import AdminHomePage from './AdminHomePage';
import AdminLogin from './AdminLogin';


 class AddStaff extends Component {
    constructor(props) {
        super(props);
        const email = sessionStorage.getItem("email")
        console.log(email)
    
        let loggedIn = true
        if(email == null){
            loggedIn = false
        }
        this.state = {
            role: "",
            loggedIn,
            email:email,
            password: "",
            staff: "",
            sname: "",
            sgender: "",
            saddress: "",
            sphone: "",
            sdob:""
           
        }

            this.changeEmailHandler = this.changeEmailHandler.bind(this);
            this.changePasswordHandler = this.changePasswordHandler.bind(this);
            this.changeRoleHandler = this.changeRoleHandler.bind(this);
            this.changeSnameHandler = this.changeSnameHandler.bind(this);
            this.changeSgenderHandler = this.changeSgenderHandler.bind(this);
            this.changeSaddressHandler = this.changeSaddressHandler.bind(this);
            this.changeSphoneHandler = this.changeSphoneHandler.bind(this);
            this.changeSdobHandler = this.changeSdobHandler.bind(this);
          

            this.submitStaffRegistrationDetails = this.submitStaffRegistrationDetails.bind(this);
            
        }


        changeEmailHandler = (event) => {
            this.setState({ email: event.target.value });
        };
        changePasswordHandler = (event) => {
            this.setState({ password: event.target.value });
        }
        changeRoleHandler = (event) => {
            this.setState({ role: event.target.value });
        }
        changeSnameHandler = (event) => {
            this.setState({ sname: event.target.value });
        };
        changeSgenderHandler = (event) => {
            this.setState({ sgender: event.target.value });
        }
        changeSaddressHandler = (event) => {
            this.setState({ saddress: event.target.value });
        }
        changeSphoneHandler = (event) => {
            this.setState({ sphone: event.target.value });
        };
        changeSdobHandler = (event) => {
            this.setState({ sdob: event.target.value });
        };
        changeroleHandler = (event) => {
            this.setState({ role: event.target.value });
        };


        submitStaffRegistrationDetails = (e) => {
            e.preventDefault();
            let staffDetails = {

                role: this.state.role,
                email: this.state.email,
                password: this.state.password,

                staff: {
                    sname: this.state.sname,
                    sgender: this.state.sgender,
                    saddress: this.state.saddress,
                    sphone: this.state.sphone,
                    sdob: this.state.sdob}
                    
            };
            console.log('staffDetails =>' + JSON.stringify(staffDetails));
            AdminService.AddStaff(staffDetails).then((res) => {
                alert('Successfully registered')
                window.location='/adminHomePage';
            })

    }
    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/HomePage" />
        }
        return (

            <>
            <div className="inWall headmargin">
                <div>
                <Header/><br />
                <div>
                <td>
                <div><Link to="/AdminHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br/>
                </td>
                <td>
                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                </td>    
                </div>
                <div className="Center">
                    <div className="Centerinside Sgradient">
                        <h3 className="Stitle title "><br /><b>Enter Staff Details</b></h3><br /><br />
                        <form className="form">
                            <div>
                                <tr>
                                    <td className="intitle"><b>Name-</b></td>
                                    <td className="Rname "><input className="Circular PlaceContent" type="text" placeholder="Enter Name"
                                        value={this.state.sname}
                                        onChange={this.changeSnameHandler}
                                    /></td>
                                </tr><br />
                                <tr>
                                    <td className="intitle"><b>Email-</b></td>
                                    <td className="Rname "><input className="Circular PlaceContent" type="email" placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.changeEmailHandler}
                                    /></td>
                                </tr>
                            </div><br />
                            <div>
                                <tr>
                                    <td className="intitle"><b>Password-</b></td>
                                    <td className="PlacePassword"><input className="Circular PlaceContent" type="password" placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.changePasswordHandler}
                                    /></td>
                                </tr>
                            </div><br />
                            <div >
                                <td className="intitle"><b>Gender-</b></td>
                                <td >
                                    <input className="Rgenderdiv" type="radio" id="male" name="Gender" value="Male" onChange={this.changeSgenderHandler} />
                                    <label for="male"> Male</label>
                                    <input className="Rgender" type="radio" id="female" name="Gender" value="female" onChange={this.changeSgenderHandler} />
                                    <label for="female"> Female</label>
                                    <input className="Rgender" type="radio" id="other" name="Gender" value="Other" onChange={this.changeSgenderHandler} />
                                    <label for="other"> Other</label>
                                </td>
                            </div><br />
                            <div>
                                <td className="intitle"><b>Role-</b></td>
                                <td className="rolemrg "><input className="Circular PlaceContent" type="text" placeholder="Enter Role"
                                    value={this.state.role}
                                    onChange={this.changeRoleHandler}
                                /></td>
                            </div><br/>
                            <div>
                            <div>
                        <label for="#" className="intitle"><b>Birth Date-</b></label>
                        <input className="Rgenderdiv date Circular" type="date" id="#" name="#"
                        value={this.state.sdob}
                        onChange={this.changeSdobHandler}/>
                        </div><br/>
                                <td className="intitle"><b>Address-</b></td>
                                <td className="addmrg "><input className="Circular PlaceContent" type="text" placeholder="Enter Address"
                                    value={this.state.saddress}
                                    onChange={this.changeSaddressHandler}
                                /></td>
                            </div><br />
                            <div>
                                <td className="intitle"><b>Phone No-</b></td>
                                <td className="passmrg"><input type="number" placeholder="Enter Phone number" className="Circular PlaceContent "
                                    value={this.state.pphone}
                                    onChange={this.changeSphoneHandler}
                                /></td>
                            </div><br />
                           
                          
                            <br />
                            <div className="PlaceSubmit">
                                <input className="title Circular PlaceBtn btn btn-primary me-md-2" type="submit" value="Submit"
                                    onClick={this.submitStaffRegistrationDetails}
                                />
                            </div><br/>
                        </form> 
                    </div>
                </div>
                </div>
                </div><br /><br />
            <Footer/>
            </>
        )
    }
}export default AddStaff

