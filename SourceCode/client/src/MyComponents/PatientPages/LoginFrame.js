import { Component } from "react";
import { Link } from "react-router-dom";
import PatientService from "../../Services/PatientService";
import UserLoginService from "../../Services/UserLoginService";


class LoginFrame extends Component{
    constructor(props){
        super(props);
        
this.state={
    email:"",
    password:"",
    role:"patient",
    loggedIn:"",
    pid : ""
};

this.changeEmailHandler = this.changeEmailHandler.bind(this);
this.changePasswordHandler = this.changePasswordHandler.bind(this);
this.submitLoginDetails = this.submitLoginDetails.bind(this);

}

changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };







  submitLoginDetails=(e)=>{
    e.preventDefault();
   
    let user={email:this.state.email, 
        password:this.state.password,
        role:this.state.role};
    console.log('User =>'+JSON.stringify(user));
    UserLoginService.login(user).then((res)=>{ 
     
            this.setState({
                loggedIn : true,
                pid : res.data?.patient.id
            })
            
            sessionStorage.setItem("pid", this.state.pid)
        
        console.log(this.state.pid)

     
       window.location="/PatientHomePage";
    }).catch(error=>{
        alert('Invalid credentials. Please try again.')
        window.location="/patientLogin";
    })       
}
    render(){

        return(
            <>
            <div className="loginWall headmargin">
                <br /><br />
            <div className="Center">
                <div className="Centerinside lgradient"><br />
                    <h2 className="PlaceLogin title "><b>Patient Login</b></h2><br/>
                        <form className="form">
                        <div>
                            <tr>
                                <td className="intitle"><b>Email-</b></td>
                                <td className="PlaceEmail "><input  className="Circular PlaceContent" type="email" placeholder="Enter Email"  value={this.state.email}
                                onChange={this.changeEmailHandler}/></td>
                            </tr>
                        </div><br/>
                        <div>
                            <tr>
                                <td className="intitle"><b>Password-</b></td>
                                <td className="PlacePassword"><input className="Circular PlaceContent" type="password" placeholder="Enter Password"  value={this.state.password}
                         onChange={this.changePasswordHandler}/></td>
                            </tr>
                        </div><br/>
                        <div className="PlaceSubmit">
                            <input  className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="Login" onClick={this.submitLoginDetails}
                            />
                        </div><br/>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end " >
                                <Link to="/ForgotPassword" className="btn btn-primary me-md-2 title">ForgotPassword</Link>
                        </div><br/><br/><br/>
                        <td>Dont have account? -</td>
                        <td>
                        <div><Link to="/Registration" className="btn btn-primary me-md-2 Lsignupbtn title">Sign up</Link></div><br/></td>
                        </form>
                </div>
            </div>
            </div>
        </>
        )
        
    }
}
export default LoginFrame;