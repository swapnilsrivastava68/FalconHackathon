package com.hcl.hackathon.model;

import javax.persistence.GeneratedValue;

import org.hibernate.annotations.Generated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CorporateDetail {

	@GeneratedValue
	private int id;
	private String name;
	private String address;
	private String legalStructure;
	private long lastYearRevenue;
}
