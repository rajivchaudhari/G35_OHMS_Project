package com.dac.service;

import com.dac.pojos.Doctor;
import com.dac.pojos.Login;

public interface LoginService {
	
	Login authenticate(String email,String password);
	
	Doctor findByEmail(String email);
	
	Login resetPassword(String email,String dob,String password,String role);
	
	Login FindUserByEmail(String email);

}
