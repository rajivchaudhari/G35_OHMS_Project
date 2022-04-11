import './App.css';
import { BrowserRouter, Link, Route, Switch , Redirect } from 'react-router-dom';
import HomePage from './MyComponents/Homepage/HomePage';
import AboutUs from './MyComponents/Homepage/AboutUs';
import StaffLogin from './MyComponents/StaffPage/StaffLogin';
import AdminLogin from './MyComponents/AdminPages/AdminLogin';
import DrLogin from './MyComponents/StaffPage/DrLogin';
import RecepLogin from './MyComponents/StaffPage/RecepLogin';
import RecepHomePage from './MyComponents/ReceptionistPages/RecepHomePage';
import PatientHomePage from './MyComponents/PatientPages/PatientHomePage';
import AdminHomePage from './MyComponents/AdminPages/AdminHomePage';
import Disclaimer from './MyComponents/Homepage/Disclaimer';
import Registration from './MyComponents/PatientPages/Registration';
import PatientLogin from './MyComponents/PatientPages/PatientLogin';
import DoctorHomePage from './MyComponents/DoctorPage/DoctorHomePage';
import { ViewAllPatient } from './MyComponents/ReceptionistPages/ViewAllPatient';
import addAppointment from './MyComponents/PatientPages/addAppoitment';
import ViewAppointment from './MyComponents/PatientPages/ViewAppointment';

import EditProfile from './MyComponents/PatientPages/EditProfile';
import AddStaff from './MyComponents/AdminPages/AddStaff';
import AddDoctor from './MyComponents/AdminPages/AddDoctor';
import ViewStaff from './MyComponents/AdminPages/ViewStaff';
import ViewPatients from './MyComponents/AdminPages/ViewPatients';
import ViewDoctor from './MyComponents/AdminPages/ViewDoctor';

import AddAppointment from './MyComponents/ReceptionistPages/AddAppointment';
import UpdateStaff from './MyComponents/AdminPages/UpdateStaff';
import AddPatient from './MyComponents/ReceptionistPages/AddPatient';
import AddPatientAppointment from './MyComponents/ReceptionistPages/AddAppointment';
import ForgotPassword from './MyComponents/ForgotPassword';
import DrAppointments from './MyComponents/ReceptionistPages/DrAppointments';
import Appointment from './MyComponents/ReceptionistPages/Appointment';
import CreateInvoice from './MyComponents/ReceptionistPages/CreateInvoice';
import { ViewInvoice } from './MyComponents/ReceptionistPages/ViewInvoice';
import PatientProfileByDoctor from './MyComponents/DoctorPage/PatientProfileByDoctor';
import { ViewAptbyRecp } from './MyComponents/ReceptionistPages/ViewAptbyRecp';



function App() {
  return (
    <div>
    <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/HomePage" exact component={HomePage} />
                  <Route path="/patientLogin" component={PatientLogin} />
                  <Route path="/AboutUs" component={AboutUs} />
                  <Route path="/Registration" component={Registration} /> 
                  <Route path="/StaffLogin" component={StaffLogin} /> 
                  <Route path="/AdminLogin" component={AdminLogin} /> 
                  <Route path="/DrLogin" component={DrLogin} /> 
                  <Route path="/StaffLogin" component={RecepLogin} /> 

                  <Route path="/RecepHomePage" component={RecepHomePage} /> 
                  <Route path="/ViewAllPatient" component={ViewAllPatient} /> 
                  <Route path="/ViewAptbyRecp" component={ViewAptbyRecp} /> 
                  <Route path="/AddStaff" component={AddStaff} /> 
                  <Route path="/AddDoctor" component={AddDoctor} /> 
                  <Route path="/createInvoice/:aid" component={CreateInvoice} /> 
                  <Route path="/updateStaff" component={UpdateStaff} /> 
                  <Route path="/viewInvoice/:aid" component={ViewInvoice} />

                 
                  <Route path="/PatientHomePage" component={PatientHomePage} /> 
                  <Route path="/Disclaimer" component={Disclaimer} /> 
                  <Route path="/adminHomePage" component={AdminHomePage} /> 
                  <Route path="/doctorHomePage" component={DoctorHomePage} />


                  <Route path="/addAppByRecept/:pid" component={AddAppointment} />
                  <Route path="/addAppointments/:pid" component={addAppointment} />

                  
                  <Route path="/ViewAppointment" component={ViewAppointment} />
           
                  <Route path="/EditProfile" component={EditProfile} />
                  <Route path="/addDoctor" component={AddDoctor} />
                  <Route path="/addStaff" component={AddStaff} />
                  <Route path="/viewStaff" component={ViewStaff} />
                  <Route path="/viewPatients" component={ViewPatients} />
                  <Route path="/viewDoctor" component={ViewDoctor} />               
                  <Route path="/receptHomePage" component={RecepHomePage} />

                  <Route path="/receptLogin" component={RecepLogin} />
                  <Route path="/editStaff/:id" component={UpdateStaff} />
                  <Route path="/RecepLogin" component={RecepLogin} />
                  <Route path="/AddPatientAppointment" component={AddPatientAppointment} />
                  <Route path="/AddPatient" component={AddPatient} />
                  <Route path="/ForgotPassword" component={ForgotPassword} />
                  <Route path="/DrAppointments" component={DrAppointments} />
                  <Route path="/Appointment/:did" component={Appointment} />
                  <Route path="/patientProfile/:pid" component={PatientProfileByDoctor} />

                  
              </Switch>
          </div>
    </BrowserRouter>
    </div>
  );
}

export default App;