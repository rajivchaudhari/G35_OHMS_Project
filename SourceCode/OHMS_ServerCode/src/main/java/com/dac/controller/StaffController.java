package com.dac.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dac.pojos.Login;
import com.dac.pojos.Staff;
import com.dac.service.StaffServiceImp;

@CrossOrigin("*")
@RestController
@RequestMapping("/staff")
public class StaffController {
	
	@Autowired
	private StaffServiceImp StaffImp;
	
	@PostMapping("/register/doctor")
	public ResponseEntity<?> addDoctorDetails(@RequestBody Login doctorDetails)
	{
		System.out.println(doctorDetails);
		try {
			return new ResponseEntity<>(StaffImp.addDoctor(doctorDetails), HttpStatus.CREATED);
			
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> addStaffDetails(@RequestBody Login staffDetails)
	{
		System.out.println(staffDetails);
		try {
			return new ResponseEntity<>(StaffImp.addStaff(staffDetails), HttpStatus.CREATED);
			
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("")
	public ResponseEntity<?> getAllStaff()
	{
		List<Staff> list=StaffImp.findAll();
		if(list==null)
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/{staffId}")
	public ResponseEntity<?> deleteStaff(@PathVariable int staffId)
	{
		StaffImp.deleteStaff(staffId);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{staffId}")
	public ResponseEntity<?> updateStaffDetails(@PathVariable int staffId, @RequestBody Staff staffDetails)
	{
		staffDetails.setId(staffId);
		Staff updatedStaff=StaffImp.updateStaff(staffDetails);
		return ResponseEntity.ok(updatedStaff);
	}
	
	@GetMapping("/{staffId}")
	public ResponseEntity<?> getstaffById(@PathVariable int staffId)
	{
		Staff staff=StaffImp.getstaffById(staffId);
		if(staff==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staff);
	}
}
