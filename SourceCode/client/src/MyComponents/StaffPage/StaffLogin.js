import { Component } from "react";
import Header from './../Header';
import Footer from './../Footer';
import { Link } from 'react-router-dom';
import AdminLogin from './../AdminPages/AdminLogin';
import DrLogin from './DrLogin';
import RecepLogin from './RecepLogin';




class StaffLogin extends Component{
    constructor(){
        super();
    }
    render(){
        return(
                <>
                <div className="headmargin HomeWall view-margin">
                <Header/>
                <br/>
                 <table className="T1">
                     <tr>
                         <td>   
                             <div >
                                 <tr>
                                     <img height="150px" className="aimg" src="images/admin.png" alt="" />
                                 </tr><br/>
                                 <tr>
                                 <div className="centered"><Link to="/AdminLogin" className="btn btn-primary rbtn">Admin Login</Link></div>
                                 </tr>
                             </div>
                             
                         </td>
                         <td>
                             <tr>
                                 <img height="150px" className="aimg" src="images/doctor.png" alt="" />
                             </tr><br/>
                             <tr>
                             <div ><Link to="/DrLogin" className="btn btn-primary rbtn">Doctor Login</Link></div>
                             </tr>
                         </td>
                         <td>
                             <tr>
                                 <img height="150px"  src="images/receptionist.png" alt="" />
                             </tr><br/>
                             <tr>
                             <div><Link to="/RecepLogin" className="btn btn-primary rbtn">Receptionist Login</Link></div>
                             </tr>
                         </td>
                     </tr>
                 </table>
                 </div>

                <Footer/>
                </>
            )

    }
}
export default StaffLogin;