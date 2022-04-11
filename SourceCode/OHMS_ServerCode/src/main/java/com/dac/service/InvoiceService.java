package com.dac.service;

import com.dac.pojos.Invoice;

public interface InvoiceService {
	Invoice	GenerateInvoice(int appointmentId,Invoice invoiceDetails);
	Invoice InvoiceByAppointmentId(int aid);

}
