package com.hcl.hackathon.service;

import com.hcl.hackathon.model.LoanDetail;
import com.hcl.hackathon.model.PersonalDetail;

public interface LoanService {

	public String createLoan();
	
	public LoanDetail getLoanStaus(int appId);
	
	public LoanDetail updateLoanStatus(int appId);
	
	public PersonalDetail getPersonalDetail(int appId);
}
