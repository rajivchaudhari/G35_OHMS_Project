import { Component } from "react";

import PatientService from "../../Services/PatientService";


class RegisterFrame extends Component{
    constructor(props){
 super(props);
this.state={
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
        alert('Successfully registered')
        window.location="/patientLogin";
   })
           
}
    render(){
        return(

            <>
            <div className="loginWall headmargin">
            <br/>
            <div className="Center">
                <div className="Centerinside lgradient">
                    <h3 className="PlaceLogin title">Enter Details</h3><br/>
                        <form className="form ">
                        <div>
                        <tr>
                            <td>Name-</td>
                                <td className="Rname "><input  className="Circular PlaceContent" type="text" placeholder="Enter Name"
                                value={this.state.pname}
                                onChange={this.changePnameHandler}/></td>
                            </tr><br/>
                            <tr>
                                <td>Email-  </td>
                                <td className="PlaceEmail "><input  className="Circular PlaceContent" type="email" placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.changeEmailHandler}/></td>
                            </tr>
                        </div><br/>
                        <div>
                            <tr>
                                <td >Password-  </td>
                                <td className="PlacePassword"><input className="Circular PlaceContent" type="password" placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.changePasswordHandler}/></td>
                            </tr>
                        </div><br/>
                        <div >
                            <td>Gender- </td>                       
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
                        <label for="dob">Birthday:</label>
                        <input className="Rgenderdiv date Circular" type="date" id="dob" name="birthday"
                        value={this.state.pdob}
                        onChange={this.changePdobHandler}/>
                        </div><br/>
                        <div>
                            <td>Address-</td>
                            <td className="Raddress "><input  className="Circular PlaceContent"  type="text" placeholder="Enter Address"
                            value={this.state.paddress}
                            onChange={this.changePaddressHandler}/></td>
                        </div><br/>
                        <div>
                            <td>Phone No-</td>
                            <td className="Rphone"><input  type="number" placeholder="Enter number" className="Circular PlaceContent "
                            value={this.state.pphone}
                            onChange={this.changePphoneHandler}/></td>
                        </div><br/>
                        <div className="PlaceSubmit">
                            <input  className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="SignUp"
                            onClick={this.submitRegistrationDetails}/>
                        </div> <br/><br/>
                        </form>
                </div>
                <br/><br/><br/><br/>
            </div>
            </div>
        </>
        )
    }
}
export default RegisterFrame;
