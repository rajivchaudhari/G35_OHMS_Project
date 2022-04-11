import { Component } from 'react';
import Header from './../Header';
import Footer from './../Footer';


class AboutUs extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <>
        <div className="HomeWall">
        <Header/>
        
            <div className="about-margin">
                <div className="img-style">
                    <img height="100px" src="http://localhost:3000/images/nLogo.jpg" alt="" />
                </div>
                <div>
                    <h3 className="heading-styl">
                        <hr className="newhr"/>
                        <small><b>ABOUT US</b></small>
                        <hr className="newhr"/>
                    </h3>
                    <div>
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className="Aboutpad aboutusinfo">Sanjeevani Hospital and Research Center is a 100 bedded tertiary care healthcare facility , located at Center of the Ujjain City. Sanjeevani Hospital And Research Centre is committed to achieve excellence in healthcare by providing the latest technology for diagnostic and therapeutic services, set up with superior ambience. Employing a team of highly qualified and committed consultants and paramedical staff , combined with state-of-the art technology. The hospital ensures quality medical care to meet the demands of different age groups and risk profiles. The objective of practicing medicine that is safe , ethical and affordable is achieved while offering succour and relief for the sick.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title"><h6>-Dean.Sanjeevani Hospital</h6></cite>
                            </figcaption>
                        </figure><br/><br/><br/>
                    </div>
                    <div className="visionpad">
                        <div className="card-group">
                            <div className="card bgradient"><br/>
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/15-health-sickness-organs/eye-look.svg" className="card-img-top img-logo-size" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title heading-styl">VISION</h5>
                                    <p className="card-text">To Make quality healthcare services available to all and emerge with innovative healthcare solutions for the benefit of the patient.</p>
                                </div>
                            </div>
                            <div className="card bgradient"><br/>
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/flag.svg" className="card-img-top img-logo-size" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title heading-styl">MISSION</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>To provide quality healthcare services to all stakeholders.</li>
                                            <li>Patient care that is trustworthy.</li>
                                            <li>To provide healthcare services affordable and accessible.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="card bgradient"><br/>
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/core-values.svg" className="card-img-top img-logo-size" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title heading-styl">VALUES</h5>
                                    <p className="card-text ">Respect , Quality , Compassion , Trust , Efficiency , Integrity , Teamwork , Accountability and Innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer/>
        </>
        )}
}
export default AboutUs;
