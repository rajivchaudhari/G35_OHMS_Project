import React, { Component } from 'react'
import axios from 'axios' 
const OHMS_URL="http://localhost:8080"
 class UserLoginService extends Component {

      login(user){
            return axios.post(OHMS_URL+"/user/login",user);
      }

      forgotPassword(email,dob,password,role){
            return axios.put(OHMS_URL+'/user'+'/'+email+'/'+dob+'/'+password+'/'+role);
      }

 findByEmail(email){
      return axios.get(OHMS_URL+'/ /email'+'/'+email)
}

      
}export default new UserLoginService()
