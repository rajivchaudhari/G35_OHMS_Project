package com.dac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.dac.pojos.Login;

@Repository
public interface LoginDao extends JpaRepository<Login, Integer> {
	
	Login findByEmail(String email);

}
