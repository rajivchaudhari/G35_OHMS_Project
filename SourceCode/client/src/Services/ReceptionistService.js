import React, { Component } from 'react'
import axios from 'axios'
const OHMS_URL="http://localhost:8080"
 class ReceptionistService extends Component {
      registerAppointment(appointmentDetails,pid,did){
            return axios.post(OHMS_URL+"/appointment/add"+"/"+ pid + "/"+ did,appointmentDetails);
      }
}
export default new ReceptionistService()
