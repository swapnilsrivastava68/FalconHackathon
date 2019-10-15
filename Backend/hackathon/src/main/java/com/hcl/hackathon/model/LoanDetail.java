package com.hcl.hackathon.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanDetail {
	private int id;
	private long amount;
	private int usageId;
	private CorporateDetail corporateDetail;
	private PersonalDetail personalDetail;
	
}
