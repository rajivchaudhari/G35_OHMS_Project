package com.dac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.dac.pojos.Patient;

@Repository
public interface PatientDao extends JpaRepository<Patient, Integer> {

}
