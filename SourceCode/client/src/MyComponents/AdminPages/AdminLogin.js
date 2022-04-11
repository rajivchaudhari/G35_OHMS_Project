import { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import UserLoginService from "../../Services/UserLoginService";
import Header from './../Header';
import Footer from './../Footer';
import ForgotPassword from './../ForgotPassword';


class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            role: "admin",
            loggedIn:""
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
    submitLoginDetails = (e) => {
        e.preventDefault();
        let user = { email: this.state.email, password: this.state.password, role: this.state.role };
        console.log('User =>' + JSON.stringify(user));
        
        UserLoginService.login(user).then((res) => {

            if(res.data.role === "admin"){
                this.setState({
                    loggedIn : true,
                    email : res.data?.email
                })
                sessionStorage.setItem("email", this.state.email)
                window.location='/adminHomePage';
            }else{
                alert('Invalid credentials. Please try again.')
            window.location="/AdminLogin";
            }

            
        }).catch(error=>{
            alert('Invalid credentials. Please try again.')
            window.location="/AdminLogin";
        });
    }
    render() {
        return (
            <>
            <div className="loginWall headmargin ">
                <Header/><br />
                <div className="Center">
                    <div className="Centerinside lgradient"><br/>
                        <h2 className="PlaceLogin title"><b>Admin Login</b></h2><br/><br/>
                        <form className="form">
                            <div>
                                <tr>
                                    <td className="intitle"><b>Email-  </b></td>
                                    <td className="PlaceEmail "><input className="Circular PlaceContent" type="email" placeholder="Enter Email" value={this.state.email}
                                        onChange={this.changeEmailHandler} /></td>
                                </tr>
                            </div><br />
                            <div>
                                <tr>
                                    <td className="intitle"><b>Password-  </b></td>
                                    <td className="PlacePassword"><input className="Circular PlaceContent" type="password" placeholder="Enter Password" value={this.state.password}
                                        onChange={this.changePasswordHandler} /></td>
                                </tr>
                            </div><br /><br /><br />
                            <div className="PlaceSubmit title">
                                <input className="Circular PlaceBtn btn btn-primary me-md-2" type="submit" value="Login" onClick={this.submitLoginDetails} />
                            </div><br />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end " className="fplogin ">
                                <Link to="/ForgotPassword" className="btn btn-primary me-md-2 title">ForgotPassword</Link>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
                <Footer/>
                </div>

            </>
        )

    }
}
export default AdminLogin;