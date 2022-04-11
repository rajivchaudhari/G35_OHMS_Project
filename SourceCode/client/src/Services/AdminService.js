import React, { Component } from "react";
import axios from "axios";
const OHMS_URL = "http://localhost:8080/staff";
class AdminService extends Component {
  AddDoctor(doctorDetails) {
    return axios.post(OHMS_URL + "/register/doctor", doctorDetails);
  }
  AddStaff(staffDetails) {
    return axios.post(OHMS_URL + "/register", staffDetails);
  }
  viewStaff() {
    return axios.get(OHMS_URL);
  }
  getStaffById(staffId) {
    return axios.get(OHMS_URL + "/" + staffId);
  }

  updateStaff(staffId, staffDetails) {
    return axios.put(OHMS_URL + '/' + staffId, staffDetails)
  }


  deleteStaff(staffId) {
    console.log(staffId)
    return axios.delete(OHMS_URL + '/' + staffId)
  }
}
export default new AdminService();
