package com.dac.controller;

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

import com.dac.pojos.Doctor;
import com.dac.pojos.Login;
import com.dac.service.LoginServiceImp;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class LoginController {

	@Autowired
	private LoginServiceImp LoginImp;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody Login user) {
		Login ValidUser = LoginImp.authenticate(user.getEmail(), user.getPassword());
		if (ValidUser != null)
			return new ResponseEntity<>(ValidUser, HttpStatus.OK);
		return new ResponseEntity<>("Invalid Credentials", HttpStatus.UNAUTHORIZED);
	}

	@PutMapping("/{email}/{dob}/{password}/{role}")
	public ResponseEntity<?> forgetPassword(@PathVariable String email, @PathVariable String dob,
			@PathVariable String password, @PathVariable String role) {
		Login updatedUser = LoginImp.resetPassword(email, dob, password, role);
		if (updatedUser == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(updatedUser);
	}

	@GetMapping("/dremail/{email}")
	public ResponseEntity<?> getDoctorByEmail(@PathVariable String email) {
		Doctor user = LoginImp.findByEmail(email);

		if (user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
		Login user = LoginImp.FindUserByEmail(email);

		if (user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}

}
