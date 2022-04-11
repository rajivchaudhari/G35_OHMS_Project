import React, { Component } from 'react'

import axios from "axios";
const OHMS_URL = "http://localhost:8080";
class DoctorService extends Component {
  
         
            ViewDoctors() {
                  return axios.get(OHMS_URL+"/staff");
                }

                getAllDoctors(){
                  return axios.get(OHMS_URL+"/doctor");
                }

                getDoctorByEmail(email){
         return axios.get(OHMS_URL + "/user/dremail" +"/"+ email);
                }
getAppointmentDetailsByDid(did){
  return axios.get(OHMS_URL+"/appointment/doctor/"+did);
}

getDoctorDetailsByAid(aid){
  return axios.get(OHMS_URL+"/doctor/aid"+aid);
}


      
}export default new DoctorService()
