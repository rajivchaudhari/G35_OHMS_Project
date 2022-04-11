import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import LoginFrame from './LoginFrame';

class PatientLogin extends Component {
    
    render() {
        return (

            <div className="Wallppr ">
                <Header />
                <LoginFrame />
                <Footer />
            </div>

        )
    }
}
export default PatientLogin;