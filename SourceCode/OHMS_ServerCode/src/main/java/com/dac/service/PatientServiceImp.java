package com.dac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dac.dao.LoginDao;
import com.dac.dao.PatientDao;
import com.dac.pojos.Login;
import com.dac.pojos.Patient;

@Service
@Transactional
public class PatientServiceImp implements PatientService {

	@Autowired
	private PatientDao PDao;
	
	@Autowired
	private LoginDao LDao;
	
	@Override
	public String registerPatient(Login patientDetails) {
		PasswordEncoder pEncoder=new BCryptPasswordEncoder();
		String encodedPassword=pEncoder.encode(patientDetails.getPassword());
		patientDetails.setPassword(encodedPassword);
		LDao.save(patientDetails);
		PDao.save(patientDetails.getPatient());
		return "Singn Up successfull !!";
	}

	@Override
	public List<Patient> getAllPatients() {
		
		return PDao.findAll();
	}

	@Override
	public Optional<Patient> getPatientById(int id) {
		
		return PDao.findById(id);
	}

	@Override
	public Patient updatePatient(Patient patient) {
		
		return PDao.save(patient);
	}

}
