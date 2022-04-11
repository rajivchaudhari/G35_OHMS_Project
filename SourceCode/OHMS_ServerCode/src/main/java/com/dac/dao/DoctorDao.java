package com.dac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dac.pojos.Doctor;

@Repository
public interface DoctorDao extends JpaRepository<Doctor, Integer> {

}
