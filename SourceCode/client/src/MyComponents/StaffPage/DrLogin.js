import { Component } from "react";
import { Link } from "react-router-dom";
import DoctorService from "../../Services/DoctorService";
import UserLoginService from "../../Services/UserLoginService";
import Header from "../Header";
import Footer from "./../Footer";

class DrLogin extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      email: "",
      password: "",
      role: "doctor",
      loggedIn: "",
     
      did: "",
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.getDoctorIdByEmail = this.getDoctorIdByEmail.bind(this);
    this.submitLoginDetails = this.submitLoginDetails.bind(this);
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };


  getDoctorIdByEmail(email) {
    console.log(this.state.email);
    console.log(email);
    DoctorService.getDoctorByEmail(email).then((res) => {
      this.setState({ doctor: res.data });
      this.setState({ did: res.data.id });
      sessionStorage.setItem("did", this.state.did);
    });
  }

  submitLoginDetails = (e) => {
    e.preventDefault();
    this.getDoctorIdByEmail(this.state.email);
    let user = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    console.log("User =>" + JSON.stringify(user));

    UserLoginService.login(user).then((res) => {
      this.setState({
        loggedIn: true,
      });


      console.log(this.state.did);
      if (res.data.role === "doctor") {
        window.location = "/doctorHomePage";
      }else{
        alert('Invalid credentials. Please try again.')
        window.location = "/DrLogin";
      }
    }).catch(error=>{
      alert('Invalid credentials. Please try again.')
      window.location = "/DrLogin";
  });
  };
  render() {
    return (
      <>
        <div className="loginWall headmargin ">
          <Header />
          <br />
          <div className="Center">
            <div className="Centerinside lgradient">
              <br />
              <h2 className="PlaceLogin title">
                <b>Doctor Login</b>
              </h2>
              <br />
              <br />
              <form className="form">
                <div>
                  <tr>
                    <td className="intitle">
                      <b>Email-</b>
                    </td>
                    <td className="PlaceEmail ">
                      <input
                        className="Circular PlaceContent"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                    </td>
                  </tr>
                </div>
                <br />
                <div>
                  <tr>
                    <td className="intitle">
                      <b>Password-</b>
                    </td>
                    <td className="PlacePassword">
                      <input
                        className="Circular PlaceContent"
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                      />
                    </td>
                  </tr>
                </div>
                <br />
                <br />
                <br />

                <div className="PlaceSubmit">
                  <input
                    className="Circular PlaceBtn btn btn-primary me-md-2 title"
                    type="submit"
                    value="Login"
                    onClick={this.submitLoginDetails}
                  />
                </div>
                <br />
                <div
                  className="d-grid gap-2 d-md-flex justify-content-md-end "
                  className="fplogin"
                >
                  <Link
                    to="/ForgotPassword"
                    className="btn btn-primary me-md-2 title"
                  >
                    ForgotPassword
                  </Link>
                </div>

                <br />
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default DrLogin;
