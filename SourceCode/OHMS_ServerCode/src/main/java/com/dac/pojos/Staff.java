package com.dac.pojos;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "staff")
public class Staff extends BaseEntity{
	private String sname;
	private String sgender;
	@DateTimeFormat(pattern = "yy-MM-dd")
	@Temporal(TemporalType.DATE) //In JPA, @Temporal annotation solves the one of the major issue of 
// converting the date and time values from Java object to compatible database type and retrieving back to the application.
	private Date sdob;
	private long sphone;
	private String saddress;
	
	// staff<------>login
	
	@OneToOne(mappedBy = "staff",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Login login;
	
	//staff<---------->doctor
	@JsonManagedReference
	@OneToOne(mappedBy = "staff",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Doctor doctor;
	
	
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getSgender() {
		return sgender;
	}
	public void setSgender(String sgender) {
		this.sgender = sgender;
	}
	public Date getSdob() {
		return sdob;
	}
	public void setSdob(Date sdob) {
		this.sdob = sdob;
	}
	public long getSphone() {
		return sphone;
	}
	public void setSphone(long sphone) {
		this.sphone = sphone;
	}
	public String getSaddress() {
		return saddress;
	}
	public void setSaddress(String saddress) {
		this.saddress = saddress;
	}
	
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	@Override
	public String toString() {
		return "Staff [sname=" + sname + ", sgender=" + sgender + ", sdob=" + sdob + ", sphone=" + sphone
				+ ", saddress=" + saddress + "]";
	}
	
	

}
