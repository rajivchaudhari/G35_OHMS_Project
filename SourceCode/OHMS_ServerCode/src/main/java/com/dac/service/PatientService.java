package com.dac.service;

import java.util.List;
import java.util.Optional;

import com.dac.pojos.Login;
import com.dac.pojos.Patient;

public interface PatientService {
	
	String registerPatient(Login patientDetails);
	
	List<Patient> getAllPatients();
	
	Optional<Patient> getPatientById(int id);
	
	Patient updatePatient(Patient patient);

}
