package com.hcl.hackathon.model;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonalDetail {

	private int id;
	private String address;
	private String citizenship;
	private Date birthDate;
	private String phone;
	private String eMail;
	private String passportNumber;
	
}
