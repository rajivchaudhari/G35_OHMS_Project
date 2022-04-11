package com.dac.service;

import java.util.List;

import com.dac.pojos.Appointment;

public interface AppointmentService {
	
	Appointment addAppointment(Appointment app,int pid,int did);
	List<Appointment> AppointmentsByPid(int patientId);
	void deleteAppointment(int id);
	
	List<Appointment> allAppointment();
	List<Appointment> appointmentByDoctor(int did);

}
