import { Component } from "react";

import Footer from "../Footer";
import Header from "../Header";

class Disclaimer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Header />
                
                <div className="DisWall headmargin">
                
                    <div>
                        <div><br />
                            <div>
                                <section><h3 className="heading"><b>OUR SERVICES</b><hr className="newhr" /></h3></section>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex-1">
                            <table className="border">
                                <tr>
                                    <div className="img-styl">
                                        <img src="images/stethescope.png" alt="" />
                                    </div>
                                </tr>
                                <tr>
                                    <div className="text-styl"><b>OPD SERVICES</b></div>
                                </tr>
                            </table>
                            <table className="border">
                                <tr>
                                    <div className="img-styl">
                                        <img src="images/ambulance.png" alt="" />
                                    </div>
                                </tr>
                                <tr>
                                    <div className="text-styl"><b>EMERGENCY & CASUALITY</b></div>
                                </tr>
                            </table>
                            <table className="border">                    <tr>
                                <div className="img-styl">
                                    <img src="http://sanjeevanihospital.in/wp-content/uploads/elementor/thumbs/IPDS-1-o4y85y7m9w0sbhn8id871k97yxyp6w4oeh0sjrz3s8.png" alt="" />
                                </div>
                            </tr>
                                <tr>
                                    <div className="text-styl"><b>IPDS</b></div>
                                </tr>
                            </table>
                            <table className="border">                    <tr>
                                <div className="img-styl">
                                    <img src="images/SURGICALINTERVENTIONS.png" alt="" />
                                </div>
                            </tr>
                                <tr>
                                    <div className="text-styl"><b>SURGICAL INTERVENTIONS</b></div>
                                </tr>
                            </table>
                            <table className="border">                    <tr>
                                <div className="img-styl">
                                    <img src="images/pharmacy.png" alt="" />
                                </div>
                            </tr>
                                <tr>
                                    <div className="text-styl"><b>PHARMACY (24X7)</b></div>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <div className="flex-1">
                                <table className="border">                    <tr>
                                    <div className="img-styl">
                                        <img src="images/radiology.png" alt="" />
                                    </div>
                                </tr>
                                    <tr>
                                        <div className="text-styl"><b>RADIOLOGY (24X7)</b></div>
                                    </tr>
                                </table>
                                <table className="border">                    <tr>
                                    <div className="img-styl">
                                        <img src="images/laboratory.png" alt="" />
                                    </div>
                                </tr>
                                    <tr>
                                        <div className="text-styl"><b>LABORATORY SERVICES</b></div>
                                    </tr>
                                </table>
                                <table className="border">                    <tr>
                                    <div className="img-styl">
                                        <img src="images/RemoteHealthCare.png" alt="" />
                                    </div>
                                </tr>
                                    <tr>
                                        <div className="text-styl"><b>REMOTE HEALTH CARE SERVICES</b></div>
                                    </tr>
                                </table>
                                <table className="border">                    <tr>
                                    <div className="img-styl">
                                        <img src="images/HOMECARESERVICES.png" alt="" />
                                    </div>
                                </tr>
                                    <tr>
                                        <div className="text-styl"><b>HOME CARE SERVICES</b></div>
                                    </tr>
                                </table>
                                <table className="border">                    <tr>
                                    <div className="img-styl">
                                        <img src="images/HOSPITALINSURANCE.png" alt="" />
                                    </div>
                                </tr>
                                    <tr>
                                        <div className="text-styl"><b>HOSPITAL INSURANCE CARDS</b></div>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="bgradient">
                            <div>
                                <div>
                                    <section><hr className="newhr" /><h3 className="heading">OUR FACILITY<hr className="newhr" /></h3></section>
                                </div>
                            </div>
                            <div className="flex-2">
                                <div className="facility-div-size">
                                    <img src="images/FacilityLogo.png" alt="" />
                                </div>
                                <div>
                                    <ul>
                                        <li><h3>Built up in 7500 sq ft area.</h3> </li>
                                        <li><h3>100+ Bedded Hospital</h3> </li>
                                        <li><h3>12+ Bedded advanced ICU</h3> </li>
                                        <li><h3>3 Operations Theatres</h3> </li>
                                        <li><h3>Fully Automated Lab Equipments</h3> </li>
                                        <li><h3>24 X 7 Power Back up</h3> </li>
                                        <li><h3>STP, ETP, RO System</h3> </li>
                                    </ul>
                                </div>
                            </div><br /><br /><br />
                        </div>
                    </div>
                    <br/><br/><br/>
                    
                </div>
                <Footer />
            </>

        )
    }
}
export default Disclaimer;