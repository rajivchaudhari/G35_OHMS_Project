import React, { Component } from 'react'
import { Link } from 'react-router-dom';






class MainFrame extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="HomeWall">
                    <div className="homepage-margin">
                        <td>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end " className="LoginBtn">
                                <Link to="/patientLogin" className="btn btn-primary me-md-2">Patient Login</Link>
                            </div>
                        </td>
                        <td>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end " className="">
                                <Link to="/StaffLogin" className="btn btn-primary me-md-2">Staff Login</Link>
                            </div>
                        </td><br />
                        <div className="Moto">
                            <h1>Healing Hands. Caring Hearts.</h1>
                        </div>
                        <br />
                        <div className="Frame">
                            <div className="helpline">Help Line Number- +91-1234567890.</div><br />
                            <div className="HospName"><b >Sanjeevani Group of Hospitals:-</b><br /></div>
                            <b className="branch">Delhi Branch</b><br />
                            <div className="helpline">
                                Sanjeevani Hospital,
                                Sector B,Rajpur Road,
                                Delhi-110054.<br />
                                Contact Us- +91-1234567890.<br /><br />
                                <b className="branch">Mumbai Branch</b>
                            </div>
                            <div className="helpline">
                                Sanjeevani Hospital,
                                Plot Num-38/39,
                                Pedder Road,
                                Mumbai-40011.<br />
                                Contact Us- +91-1234567890.<br /><br />
                            </div>
                            <b className="branch">Pune Branch</b><br />
                            <div className="helpline">
                                Sanjeevani Hospital,
                                32,Sasoon Road,
                                Opposite Railway Station,
                                Pune-411002.<br />
                                Contact Us- +91-1234567890.
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default MainFrame;

