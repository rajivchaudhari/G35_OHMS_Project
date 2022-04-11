import { Component } from "react";

import PatientService from "../../Services/PatientService";
import Footer from './../Footer';
import Header from './../Header';
import { Link, Redirect } from 'react-router-dom';
import RecepHomePage from './RecepHomePage';


class AddPatient extends Component{
    constructor(props){
    super(props);
    const email = sessionStorage.getItem("email")
    console.log(email)

    let loggedIn = true
    if(email == null){
        loggedIn = false
    }

    this.state = {
        loggedIn,
        email:email,
        role:"patient",
        email:"",
        password:"",
        patient:"",  
        pname:"",
        pgender:"",
        pdob:"",
        paddress:"",
        pphone: ""
    }


    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changePnameHandler = this.changePnameHandler.bind(this);
    this.changePgenderHandler = this.changePgenderHandler.bind(this);
    this.changePdobHandler = this.changePdobHandler.bind(this);
    this.changePaddressHandler = this.changePaddressHandler.bind(this);
    this.changePphoneHandler = this.changePphoneHandler.bind(this);
    this.submitRegistrationDetails = this.submitRegistrationDetails.bind(this);

    }
  

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    };
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changePnameHandler = (event) => {
        this.setState({ pname: event.target.value });
    };
    changePgenderHandler = (event) => {
        this.setState({ pgender: event.target.value });
    }
    changePdobHandler = (event) => {
        this.setState({ pdob: event.target.value });
    };
    changePaddressHandler = (event) => {
        this.setState({ paddress: event.target.value });
    }
    changePphoneHandler = (event) => {
        this.setState({ pphone: event.target.value });
    };

  submitRegistrationDetails=(e)=>{
    e.preventDefault();
    let patientDetails={
        role:this.state.role,
        email:this.state.email,
        password:this.state.password,

     patient:{
    pname:this.state.pname,
    pgender:this.state.pgender,
    pdob:this.state.pdob,
    paddress:this.state.paddress,
    pphone:this.state.pphone 

} };
    console.log('patientDetails =>'+JSON.stringify(patientDetails));
    PatientService.registerPatient(patientDetails).then((res)=>{
        alert('Sucessfully Registered')
        window.location="/RecepHomePage";})
           
}
    render(){
        if (this.state.loggedIn === false){
            return <Redirect to="/HomePage" />
        }
        return(
            <>
            <div className="inWall headmargin">
            <div>
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
      </nav>
            </div>
            <br/>
            <div>
                        <td>
                            <div><Link to="/RecepHomePage" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br />
                        </td>
                        <td>
                            <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                        </td>
                    </div>
            <div className="Center">
                <div className="Centerinside Sgradient">
                    <h3 className="PlaceLogin title"><br /><b> Patient Details</b></h3><br/>
                        <form className="form ">
                        <div>
                        <tr>
                            <td className="intitle"><b>Name-</b></td>
                                <td className="Rname "><input  className="Circular PlaceContent" type="text" placeholder="Enter Name"
                                value={this.state.pname}
                                onChange={this.changePnameHandler}/></td>
                            </tr><br/>
                            <tr>
                                <td className="intitle"><b>Email-  </b></td>
                                <td className="Rname "><input  className="Circular PlaceContent" type="email" placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.changeEmailHandler}/></td>
                            </tr>
                        </div><br/>
                        <div>
                            <tr>
                                <td className="intitle"><b>Password-  </b></td>
                                <td className="PlacePassword"><input className="Circular PlaceContent" type="password" placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.changePasswordHandler}/></td>
                            </tr>
                        </div><br/>
                        <div >
                            <td className="intitle"><b>Gender- </b></td>                       
                            <td >
                            <input className="Rgenderdiv" type="radio" id="male" name="Gender" value="Male" onChange={this.changePgenderHandler}/>
                            <label for="male"> Male</label>
                            <input className="Rgender" type="radio" id="female" name="Gender" value="female" onChange={this.changePgenderHandler}/>
                            <label for="female"> Female</label>
                            <input className="Rgender" type="radio" id="other" name="Gender" value="Other" onChange={this.changePgenderHandler}/>
                            <label for="other"> Other</label>
                            </td>
                        </div><br/>
                        <div>
                        <label for="dob" className="intitle"><b>Birthday:</b></label>
                        <input className="Rgenderdiv date Circular" type="date" id="dob" name="birthday"
                        value={this.state.pdob}
                        onChange={this.changePdobHandler}/>
                        </div><br/>
                        <div>
                            <td className="intitle"><b>Address-</b></td>
                            <td className="addmrg"><input  className="Circular PlaceContent"  type="text" placeholder="Enter Address"
                            value={this.state.paddress}
                            onChange={this.changePaddressHandler}/></td>
                        </div><br/>
                        <div>
                            <td className="intitle"><b>Phone No-</b></td>
                            <td className="passmrg"><input  type="number" placeholder="Enter number" className="Circular PlaceContent "
                            value={this.state.pphone}
                            onChange={this.changePphoneHandler}/></td>
                        </div><br/>
                        <div className="PlaceSubmit">
                            <input  className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="Register"
                            onClick={this.submitRegistrationDetails}/>
                        </div> <br/><br/>
                        </form>
                </div>
                <br/><br/><br/><br/>
            </div>
            </div>
            <Footer/>
        </>
        )
    }
}
export default AddPatient;
