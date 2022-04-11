package com.dac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dac.pojos.Appointment;

@Repository
public interface AppointmentDao extends JpaRepository<Appointment, Integer> {

}
