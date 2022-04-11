package com.dac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dac.pojos.Invoice;
import com.dac.service.InvoiceServiceImp;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/invoice")
public class InvoiceController {
	
	@Autowired
	private InvoiceServiceImp InvoiceImp;
	
	@PostMapping("/add/{aid}")
	public ResponseEntity<?> generateInvoice(@PathVariable int aid,@RequestBody Invoice invoiceDetails)
	{
		try {
			return new ResponseEntity<>(InvoiceImp.GenerateInvoice(aid, invoiceDetails), HttpStatus.CREATED);

		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{aid}")
	public ResponseEntity<?> showInvoiceByAppointmentId(@PathVariable int aid)
	{
		System.out.println(" hi    "+aid);
		try {
			return new ResponseEntity<>(InvoiceImp.InvoiceByAppointmentId(aid), HttpStatus.FOUND);

		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

}
