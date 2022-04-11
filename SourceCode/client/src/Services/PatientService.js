import React, { Component } from 'react'
import axios from 'axios';
const OHMS_URL="http://localhost:8080"
 class PatientService extends Component {
    registerPatient(patientDetails){
          return axios.post(OHMS_URL +"/patient/register",patientDetails)
    } 
    
    viewAllPatient() {
      return axios.get(OHMS_URL+"/patient");
    }

    getPatientByDoctorId(did){
      return axios.get(OHMS_URL+ "/appointment/doctor/"+ did);
    }

    getPatientWhoHaveAppointment(){
      return axios.get(OHMS_URL+ "/appointment");
    }

    deleteAppointment(aid){
      return axios.delete(OHMS_URL+ "/appointment/delete/"+aid);
    }

    makeInvoice(aid,invoiceDetails) {
      return axios.post(OHMS_URL+"/invoice/add/" + aid,invoiceDetails);
    }

      showinvoice(aid){
      //console.log("response "+response)
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch("http://localhost:8080/invoice/"+aid, requestOptions)
        .then(response => { return  response.json()})
        .then(result => {return result})
        .catch(error =>{return  error});
    //  return    axios.get("http://localhost:8080/invoice/1")
    //    .then(response=> {
    //      debugger;
    //     console.log(response); 
    //      return response.data}).catch(ex=>{
    //       debugger;
    //       return  ex})
    //   ;
    }

    showAppointmentByPid(pid){
      return axios.get(OHMS_URL+"/appointment/patient/" + pid);
    }
editPatient(pid,patientDetails){
  return axios.put(OHMS_URL+"/patient/"+pid, patientDetails);
}
showPatientByPid(pid){
  return axios.get(OHMS_URL+"/patient/" + pid);
}


}export default new PatientService()
