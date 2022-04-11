package com.dac.service;

import java.util.List;

import com.dac.pojos.Login;
import com.dac.pojos.Staff;

public interface StaffService {
	String addDoctor(Login doctorDetails);
	
	String addStaff(Login staffDetails);
	
	void deleteStaff(int staffId);
	
	List<Staff> findAll();
	
	Staff updateStaff(Staff staff);
	
	Staff getstaffById(int id);
	
	
	

}
