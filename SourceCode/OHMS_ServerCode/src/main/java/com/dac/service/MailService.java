package com.dac.service;

import org.springframework.mail.MailException;

import com.dac.pojos.Appointment;



public interface MailService {

	void sendEmail(Appointment app) throws MailException;

	void sendEmailforDeletion(Appointment app) throws MailException;

}
