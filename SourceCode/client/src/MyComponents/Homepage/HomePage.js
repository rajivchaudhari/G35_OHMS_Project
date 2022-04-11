import { Component } from "react";
import Header from './../Header';
import MainFrame from './MainFrame';
import Footer from './../Footer';



class HomePage extends Component {
    constructor() {
        super();
        sessionStorage.removeItem("pid")
        sessionStorage.removeItem("did")
        sessionStorage.removeItem("email")

    }
    
    render() {
        return (

            <div  >
                <Header />
                <MainFrame />
                <Footer />
            </div>
        )
    }
}
export default HomePage;