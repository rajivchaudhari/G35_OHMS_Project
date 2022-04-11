package com.dac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.dac.dao.AppointmentDao;
import com.dac.dao.DoctorDao;
import com.dac.dao.PatientDao;
import com.dac.pojos.Appointment;
import com.dac.pojos.Doctor;
import com.dac.pojos.Patient;

@Service
@Transactional
public class AppointmentServiceImp implements AppointmentService {

	@Autowired
	private PatientDao PDao;
	@Autowired
	private DoctorDao DDao;
	@Autowired
	private AppointmentDao ADao;

	@Override
	public Appointment addAppointment(Appointment app, int pid, int did) {
		Patient patient = PDao.findById(pid).orElse(null);
		Doctor doctor = DDao.findById(did).orElse(null);
		app.setDoctor(doctor);
		app.setPatient(patient);
		ADao.save(app);
		return app;
	}

	@Override
	public List<Appointment> AppointmentsByPid(int patientId) {
		Patient patient = PDao.findById(patientId).orElse(null);
		return patient.getAppointmentList();
	}

	@Override
	public void deleteAppointment(int id) {

		ADao.deleteById(id);
	}

	@Override
	public List<Appointment> allAppointment() {
		
		return ADao.findAll();
	}

	@Override
	public List<Appointment> appointmentByDoctor(int did) {
		Doctor doctor=DDao.findById(did).orElse(null);
		return doctor.getAppointment();
	}

}
