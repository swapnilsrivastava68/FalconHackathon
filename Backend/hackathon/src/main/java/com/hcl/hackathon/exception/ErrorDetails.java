package com.hcl.hackathon.exception;
// Eception Handling Statergy



import java.util.Date;

public class ErrorDetails {
	 private Date time;
	 private String message;
	 private String details;
	 public ErrorDetails(Date timestamp, String message, String details) {
	  super();
	  this.time = timestamp;
	  this.message = message;
	  this.details = details;
	 }
	 public Date getTimestamp() {
	  return time;
	 }
	 public String getMessage() {
	  return message;
	 }
	 public String getDetails() {
	  return details;
	 }
	}