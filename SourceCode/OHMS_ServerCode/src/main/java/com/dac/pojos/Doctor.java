package com.dac.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "doctor")
public class Doctor extends BaseEntity{
	//private String dname;
	private String deducation;
	private String dspeciality;
	
	@JsonManagedReference(value = "user-doctor")// forward reference that includes during the serialization process
	@OneToOne(mappedBy = "doctor",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Login login;
	
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "sid")
	private Staff staff;
	
	//@JsonIgnore
	@OneToMany(mappedBy = "doctor")
	private List<Appointment> appointment=new ArrayList<Appointment>();
	
	@JsonManagedReference(value="user-doctor")
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public Staff getStaff() {
		return staff;
	}
	public void setStaff(Staff staff) {
		this.staff = staff;
	}
	public List<Appointment> getAppointment() {
		return appointment;
	}
	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}
	
	
	public String getDeducation() {
		return deducation;
	}
	public void setDeducation(String deducation) {
		this.deducation = deducation;
	}
	public String getDspeciality() {
		return dspeciality;
	}
	public void setDspeciality(String dspeciality) {
		this.dspeciality = dspeciality;
	}
	@Override
	public String toString() {
		return "Doctor [dname="   + ", deducation=" + deducation + ", dspeciality=" + dspeciality + "]";
	}
	
	

}
