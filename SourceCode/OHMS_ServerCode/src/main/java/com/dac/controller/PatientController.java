package com.dac.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dac.pojos.Login;
import com.dac.pojos.Patient;
import com.dac.service.PatientServiceImp;

@CrossOrigin("*")
@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	private PatientServiceImp PatientImp;
	
	@PostMapping("/register")
	public ResponseEntity<?> resgisterPatient(@RequestBody Login patientDetails)
	{
		try {
			return new ResponseEntity<>(PatientImp.registerPatient(patientDetails), HttpStatus.CREATED) ;

		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("")
	public ResponseEntity<?> getAllPatient()
	{
		try {
			return new ResponseEntity<>(PatientImp.getAllPatients(), HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/{pid}")
	public ResponseEntity<?> getPatientById(@PathVariable int pid)
	{
		Optional<Patient> patient=PatientImp.getPatientById(pid);
		if(patient==null) 
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(patient);
			
	}
	
	@PutMapping("/{pid}")
	public ResponseEntity<?> updatePatientDetails(@PathVariable int pid,@RequestBody Patient patientDetails)
	{
		try {
			patientDetails.setId(pid);
			return new ResponseEntity(PatientImp.updatePatient(patientDetails), HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
		
	}

}
