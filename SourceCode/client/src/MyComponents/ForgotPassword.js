
import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './Homepage/HomePage';

import UserLoginService from '../Services/UserLoginService';
class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:this.props.match.params.email,
            dob: "",
            password: "",
            role:""
        }


 this.changeEmailHandler = this.changeEmailHandler.bind(this);
 this.changePasswordHandler = this.changePasswordHandler.bind(this);
 this.changeDobHandler = this.changeDobHandler.bind(this);
 this.changeRoleHandler = this.changeRoleHandler.bind(this);
 this.submitDetails = this.submitDetails.bind(this);
 this.GetEmail = this.GetEmail.bind(this);
}



  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
 
  submitDetails=(e)=>{
    e.preventDefault();
    UserLoginService.forgotPassword(this.state.email,this.state.dob,this.state.password,this.state.role).then((res)=>{
        window.location='/HomePage';
alert("Password updated !!!")

    })}
           


    

           
 GetEmail=(e)=>{

        e.preventDefault();
        UserLoginService.findByEmail(this.state.email).then((res)=>
        {let user=res.data;
        this.setState({role:user.role
            })})
           
            }

VarifyEmail=(e)=>{
    e.preventDefault();
    if(this.state.role!= null )
    {  alert("Email varified !!!"); }
      else{
        alert("Please enter valid Email !!!") 
}


          

  }


    render() {
        return(
                            <>
                <div className="loginWall headmargin">
                <Header/><br />
                
                <div className="fgtpass">
                <div className="Centerinside lgradient">
                <h3 className="PlaceLogin title"><br /><b>Change Password</b></h3><br/>
                <div>
                <form className="form">
                    <tr>
                        <td className="intitle"><b>Registered Email- </b></td>
                        <td className="PlaceEmail "><input  className="Circular PlaceContent " type="email" placeholder="Enter Registered Email" value={this.state.email}
                                onChange={this.changeEmailHandler} /></td>
                    </tr><br/>

                    <div className="PlaceSubmit">
                        <input className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="Varifiy Email"
                       onMouseEnter={this.GetEmail}
                            onClick={this.VarifyEmail}
                        />
                    </div><br/>
                    <div>
                        <label for="dob" className="intitle"><b>Birthday:</b></label>
                        <input className="Rgenderdiv fpbtn1 Circular" type="date" id="dob" name="birthday"
                            value={this.state.dob}
                            onChange={this.changeDobHandler} />
                    </div><br/>
                    <div>
                    <tr>
                        <td className="intitle"><b>New Password       -  </b></td>
                        <td className="fpbtn2"><input className="Circular PlaceContent " type="password" placeholder="Enter New Password"/></td>
                    </tr>
                </div><br />
                <div>
                    <tr>
                        <td className="intitle"><b>Confirm Password   -  </b></td>
                        <td className="fpbtn3 "><input className="Circular PlaceContent " type="password" placeholder="Enter Password"
                        value={this.state.password}
                                onChange={this.changePasswordHandler}/></td>
                    </tr><br/><br />
                </div>
                <div className="PlaceSubmit">
                        <input className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="Reset Password"
                            onClick={this.submitDetails}/>
                    </div><br/>
                </form>
                </div>

                </div>
                </div></div>
                        <Footer/>
                        
        </>
        
        )
    }
}
export default  ForgotPassword
