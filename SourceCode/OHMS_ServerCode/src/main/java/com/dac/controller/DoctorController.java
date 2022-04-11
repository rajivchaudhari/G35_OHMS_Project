package com.dac.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dac.pojos.Doctor;
import com.dac.pojos.Staff;
import com.dac.service.DoctorServiceImp;
@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")
public class DoctorController {
	
	@Autowired
	private DoctorServiceImp doctorImp;
	
	@GetMapping("")
	public ResponseEntity<?> getAllDoctors()
	{
	List<Doctor> list=doctorImp.getAllDoctors();
	if(list==null)
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	return ResponseEntity.ok(list);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findDoctorById(@PathVariable int id)
	{
       Optional<Doctor>  doctor=doctorImp.getDoctorbyId(id);
		System.out.println(doctor);
		if(doctor.isEmpty())
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(doctor);
	}
	
	@GetMapping("/aid/{aid}")
	public ResponseEntity<?> getDoctorDetailsByAid(@PathVariable int aid)
	{
		Staff staff=doctorImp.getdoctorByAppointmentId(aid);
		if (staff==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(staff);
	}
	
	


}
