package com.dac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dac.dao.AppointmentDao;
import com.dac.dao.InvoiceDao;
import com.dac.pojos.Appointment;
import com.dac.pojos.Invoice;
@Service
@Transactional
public class InvoiceServiceImp implements InvoiceService {
	
	@Autowired
	private InvoiceDao IDao;
	@Autowired
	private AppointmentDao ADao;

	@Override
	public Invoice GenerateInvoice(int appointmentId, Invoice invoiceDetails) {
	Appointment app=ADao.findById(appointmentId).orElse(null);
	invoiceDetails.setAppointment(app);	
	IDao.save(invoiceDetails);
	return invoiceDetails;
	}

	@Override
	public Invoice InvoiceByAppointmentId(int aid) {
	
		Appointment app=ADao.findById(aid).orElse(null);
		return app.getInvoice();
	}
	
    

}
