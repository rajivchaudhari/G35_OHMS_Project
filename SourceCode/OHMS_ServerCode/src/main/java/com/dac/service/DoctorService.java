package com.dac.service;

import java.util.List;
import java.util.Optional;

import com.dac.pojos.Doctor;
import com.dac.pojos.Staff;

public interface DoctorService {
	
	List<Doctor> getAllDoctors();
	
	Optional<Doctor> getDoctorbyId(int id);
	
	Staff getdoctorByAppointmentId(int aid);

}
