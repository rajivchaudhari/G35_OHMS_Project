package com.dac.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "login")
public class Login extends BaseEntity{
	private String email;
	private String password;
	private String role;
	
	//login 1<----------->1 patient
	
	@OneToOne
	@JoinColumn(name = "pid",nullable = true)
	//@MapsId
	private Patient patient;
	
	//@JsonIgnore can also be use in place of @JsonBackReference to avoid serialization of this field
	@JsonBackReference(value = "user-doctor")// backreference that omits during the serialization process.
	@OneToOne
	@JoinColumn(name = "did",nullable = true)
	//@MapsId
	private Doctor doctor;
	
	//@JsonIgnore
	@JsonBackReference(value = "user-staff")
	@OneToOne
	@JoinColumn(name = "sid",nullable =true)
	//@MapsId
	private Staff staff;
	
	
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + ", role=" + role + "]";
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	public Staff getStaff() {
		return staff;
	}
	public void setStaff(Staff staff) {
		this.staff = staff;
	}
	
	

}
