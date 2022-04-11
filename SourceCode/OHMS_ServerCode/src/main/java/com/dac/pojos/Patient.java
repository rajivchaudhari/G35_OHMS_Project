package com.dac.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "patient")
public class Patient extends BaseEntity{
	
	private String pname;
	private String pgender;
	@DateTimeFormat(pattern = "yy-MM-dd")
	@Temporal(TemporalType.DATE) //In JPA, @Temporal annotation solves the one of the major issue of 
// converting the date and time values from Java object to compatible database type and retrieving back to the application.
	private Date pdob;
	private long pphone;
	private String paddress;
	
	@JsonIgnore
	@OneToMany(mappedBy = "patient")//parent side ,inverse side 	
	private List<Appointment> appointmentList=new ArrayList<Appointment>();
	
	//patient 1<--------->1 login
	@JsonIgnore
	@OneToOne(mappedBy = "patient",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Login login;
	
	
	public List<Appointment> getAppointmentList() {
		return appointmentList;
	}
	public void setAppointmentList(List<Appointment> appointmentList) {
		this.appointmentList = appointmentList;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPgender() {
		return pgender;
	}
	public void setPgender(String pgender) {
		this.pgender = pgender;
	}
	public Date getPdob() {
		return pdob;
	}
	public void setPdob(Date pdob) {
		this.pdob = pdob;
	}
	public long getPphone() {
		return pphone;
	}
	public void setPphone(long pphone) {
		this.pphone = pphone;
	}
	public String getPaddress() {
		return paddress;
	}
	public void setPaddress(String paddress) {
		this.paddress = paddress;
	}
	@Override
	public String toString() {
		return "Patient [pname=" + pname + ", pgender=" + pgender + ", pdob=" + pdob + ", pphone=" + pphone
				+ ", paddress=" + paddress + "]";
	}
	
	
}
