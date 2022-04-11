package com.dac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dac.dao.AppointmentDao;
import com.dac.dao.DoctorDao;
import com.dac.dao.StaffDao;
import com.dac.pojos.Doctor;
import com.dac.pojos.Staff;

@Service
@Transactional
public class DoctorServiceImp implements DoctorService{

	@Autowired
	private DoctorDao DDao;
	@Autowired
	private StaffDao SDao;
	@Autowired
	private AppointmentDao ADao;
	@Override
	public List<Doctor> getAllDoctors() {
		
		return DDao.findAll();
	}
	@Override
	public Optional<Doctor> getDoctorbyId(int id) {
		
		return DDao.findById(id);
	}
	@Override
	public Staff getdoctorByAppointmentId(int aid) {
	Staff staff	=ADao.getById(aid).getDoctor().getStaff();
		return staff;
	}

}
