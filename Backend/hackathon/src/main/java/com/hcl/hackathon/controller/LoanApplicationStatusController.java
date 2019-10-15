package com.hcl.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.hackathon.exception.ResourceNotFoundException;
import com.hcl.hackathon.model.LoanDetail;
import com.hcl.hackathon.repository.LoanRepository;

@RestController

public class LoanApplicationStatusController {
	
	@Autowired
	private LoanRepository loanRepository;
	
	 @GetMapping("/loanApplicationStatus/{id}")
	 public ResponseEntity<LoanDetail> getEmployeeById(@PathVariable(value = "id") Integer loanId)
	   throws ResourceNotFoundException {
		 LoanDetail loan = loanRepository.findById(loanId).orElseThrow(()-> new ResourceNotFoundException("Loan not found for this id :: " + loanId));
	  return ResponseEntity.ok().body(loan);
	 }
}
