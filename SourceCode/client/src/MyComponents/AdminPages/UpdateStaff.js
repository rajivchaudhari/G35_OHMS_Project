import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Header from './../Header';
import Footer from './../Footer';
import AdminService from '../../Services/AdminService';
import ViewStaff from './ViewStaff';
import AdminHomePage from './AdminHomePage';


 class UpdateStaff extends Component {
    constructor(props) {
        super(props);
        const email = sessionStorage.getItem("email")
        let loggedIn = true
    if(email == null){
        loggedIn = false
    }
        this.state = {
            id:this.props.match.params.id,
            sname: "",
            saddress: "",
            sphone: "",
            loggedIn,
            email:email,
           
        }



        this.changeSnameHandler = this.changeSnameHandler.bind(this);
        this.changeSgenderHandler = this.changeSgenderHandler.bind(this);
            this.changeSdobHandler = this.changeSdobHandler.bind(this);
        this.changeSaddressHandler = this.changeSaddressHandler.bind(this);
        this.changeSphoneHandler = this.changeSphoneHandler.bind(this);

        this.updateStaff = this.updateStaff.bind(this);


    }



    changeSnameHandler = (event) => {
        this.setState({ sname: event.target.value });
    };
    changeSgenderHandler = (event) => {
        this.setState({ sgender: event.target.value });
    };
    changeSdobHandler = (event) => {
        this.setState({ sdob: event.target.value });
    };
   
    changeSaddressHandler = (event) => {
        this.setState({ saddress: event.target.value });
    }
    changeSphoneHandler = (event) => {
        this.setState({ sphone: event.target.value });
    };
    componentDidMount(){
        AdminService.getStaffById(this.state.id).then((res)=>
        {let staff=res.data;
        this.setState({sname:staff.sname,
            saddress:staff.saddress,
            sgender:staff.sgender,
            sdob:staff.sdob,
            sphone:staff.sphone})})
  }

    updateStaff = (e) => {
        e.preventDefault();
        let staffDetails = {
            
                
                    sname: this.state.sname,
                    sgender:this.state.sgender,
                    sdob:this.state.sdob,
                    saddress: this.state.saddress,
                    sphone: this.state.sphone
                
        };
        console.log('staffDetails =>' + JSON.stringify(staffDetails));
        AdminService.updateStaff(this.state.id,staffDetails).then((res) => {
            alert('Successfully updated')
            window.location='/viewStaff';
        })

    }
    render() {
        if (this.state.loggedIn === false){
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
                    
                <div >
                <td>
                <div><Link to="/ViewStaff" className="btn btn-primary me-md-2 backbtn ">Back</Link></div><br/>
                </td>
                <td>
                <div><Link to="/HomePage" className="btn btn-primary me-md-2 Logout">Log Out</Link></div>
                </td>    
                </div>
                <div className="Center">
                    <div className="Centerinside Sgradient">
                        <h3 className="passmrg title"><br /><b>Update Staff Details</b></h3><br />
                        <form className="form">
                            <div>
                                <tr>
                                    <td className="intitle"><b>Name-</b></td>
                                    <td className="Rname "><input className="Circular PlaceContent" type="text" placeholder="Enter Name"
                                        value={this.state.sname}
                                        onChange={this.changeSnameHandler}
                                    /></td>
                                </tr>
                            </div><br />
                            <div >
                            <td className="intitle"><b>Gender- </b></td>                       
                            <td >
                            <input className="Rgenderdiv" type="radio" id="male" name="Gender" value="Male" onChange={this.changeSgenderHandler}/>
                            <label for="male"> Male</label>
                            <input className="Rgender" type="radio" id="female" name="Gender" value="female" onChange={this.changeSgenderHandler}/>
                            <label for="female"> Female</label>
                            <input className="Rgender" type="radio" id="other" name="Gender" value="Other" onChange={this.changeSgenderHandler}/>
                            <label for="other"> Other</label>
                            </td>
                        </div><br/>
                        <div>
                        <label for="dob" className="intitle"><b>Birth Date:</b></label>
                        <input className="Rgenderdiv" type="date" id="dob" name="birthday"
                        value={this.state.sdob}
                        onChange={this.changeSdobHandler}/>
                        </div><br/>
                       
                            <div>
                                <td className="intitle"><b>Address-</b></td>
                                <td className="addmrg "><input className="Circular PlaceContent" type="text" placeholder="Enter Address"
                                    value={this.state.saddress}
                                    onChange={this.changeSaddressHandler}
                                /></td>
                            </div><br />
                            <div>
                                <td className="intitle"><b>Phone No-</b></td>
                                <td className="passmrg"><input type="number" placeholder="Enter Phone number" className="Circular PlaceContent "
                                    value={this.state.sphone}
                                    onChange={this.changeSphoneHandler}
                                /></td>
                            </div><br />
                            <div className="PlaceSubmit">
                                <input className="Circular PlaceBtn btn btn-primary me-md-2 title" type="submit" value="Update"
                                    onClick={this.updateStaff}
                                />
                            </div><br/>
                        </form>
                    </div>
                </div>
                </div>
                <Footer />
            </>
        )
    }
}export default UpdateStaff
