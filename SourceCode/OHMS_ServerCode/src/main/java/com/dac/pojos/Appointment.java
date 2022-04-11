package com.dac.pojos;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "appointment")
public class Appointment extends BaseEntity{

	@DateTimeFormat(pattern = "yy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date adate;
	
	private String slot;
	private String asymptoms;
	
	//child side ,Owning side  
	//@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "pid")
	private Patient patient;
	
	//appointment<------->invoice
	@JsonIgnore
	@OneToOne(mappedBy = "appointment")
	private Invoice invoice;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor doctor;
	
	
	
	public Invoice getInvoice() {
		return invoice;
	}
	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Date getAdate() {
		return adate;
	}
	public void setAdate(Date adate) {
		this.adate = adate;
	}
	public String getslot() {
		return slot;
	}
	public void setslot(String timeslot) {
		this.slot = timeslot;
	}
	public String getAsymptoms() {
		return asymptoms;
	}
	public void setAsymptoms(String asymptoms) {
		this.asymptoms = asymptoms;
	}
	@Override
	public String toString() {
		return "Appointment [adate=" + adate + ", timeslot=" + slot + ", asymptoms=" + asymptoms + "]";
	}
	
	
}
