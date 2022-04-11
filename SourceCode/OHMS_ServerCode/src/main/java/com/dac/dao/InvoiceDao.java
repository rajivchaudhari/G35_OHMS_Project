package com.dac.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dac.pojos.Invoice;

@Repository
public interface InvoiceDao extends JpaRepository<Invoice, Integer> {

}
