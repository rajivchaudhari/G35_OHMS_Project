import { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import RegisterFrame from "./RegisterFrame";

class Registration extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="Wallppr">

            <Header/>
            <RegisterFrame/>
            <Footer/>
            </div>
        )
}
}
export default Registration;