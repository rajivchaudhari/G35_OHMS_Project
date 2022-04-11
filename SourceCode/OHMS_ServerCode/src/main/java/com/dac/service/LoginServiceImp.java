package com.dac.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dac.dao.LoginDao;
import com.dac.pojos.Doctor;
import com.dac.pojos.Login;

@Service
@Transactional
public class LoginServiceImp implements LoginService {

	@Autowired
	private LoginDao Ldao;

	@Override
	public Login authenticate(String email, String password) {
		Login user = Ldao.findByEmail(email);
		String hashedPassword = user.getPassword();
		boolean check = BCrypt.checkpw(password, hashedPassword);
		if (check)
			return user;
		return null;
	}

	@Override
	public Doctor findByEmail(String email) {

		return Ldao.findByEmail(email).getDoctor();
	}

	@Override
	public Login resetPassword(String email, String dob, String password, String role) {

		Login user = Ldao.findByEmail(email);
		if (user != null) {
			Date date;
			if (role.equals("patient")) {
				date = user.getPatient().getPdob();
			} else if (role.equals("doctor")) {
				date = user.getDoctor().getStaff().getSdob();
			} else {
				date = user.getStaff().getSdob();
			}

			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			String strDate = dateFormat.format(date);

			if (dob.equals(strDate)) {
				PasswordEncoder pEncoder = new BCryptPasswordEncoder();
				String encodedPassword = pEncoder.encode(password);
				user.setPassword(encodedPassword);
				Ldao.save(user);
				return user;
			}
		}

		return null;
	}

	@Override
	public Login FindUserByEmail(String email) {
	
		return Ldao.findByEmail(email);
	}

}
