package com.dac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dac.dao.DoctorDao;
import com.dac.dao.LoginDao;
import com.dac.dao.StaffDao;
import com.dac.pojos.Login;
import com.dac.pojos.Staff;
@Service
@Transactional
public class StaffServiceImp implements StaffService {
	
	@Autowired
	private DoctorDao Ddao;
	@Autowired
	private LoginDao Ldao;
	@Autowired
	private StaffDao Sdao;

	@Override
	public String addDoctor(Login doctorDetails) 
	{
		PasswordEncoder pEncoder=new BCryptPasswordEncoder();
		String encodedPassword=pEncoder.encode(doctorDetails.getPassword());
		doctorDetails.setPassword(encodedPassword);
		Ddao.save(doctorDetails.getDoctor());
		Ldao.save(doctorDetails);
		Sdao.save(doctorDetails.getDoctor().getStaff());
		return "Doctor Details added !!";									
	}

	@Override
	public String addStaff(Login staffDetails) 
	{
		PasswordEncoder pEncoder=new BCryptPasswordEncoder();
		String encodedPassword=pEncoder.encode(staffDetails.getPassword());
		staffDetails.setPassword(encodedPassword);
		Sdao.save(staffDetails.getStaff());
		Ldao.save(staffDetails);
		
		return "Staff Details added !!";
	}

	@Override
	public void deleteStaff(int staffId) {
		Sdao.deleteById(staffId);	
	}

	@Override
	public List<Staff> findAll() {
		
		return Sdao.findAll();
	}

	@Override
	public Staff updateStaff(Staff staff) {
		
		return Sdao.save(staff);
	}

	@Override
	public Staff getstaffById(int staffId) {
		Optional<Staff> staff=Sdao.findById(staffId);
		return staff.orElse(null);
	}
	

}
