package com.hcl.hackathon.controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/hackathon")
@RestController
public class NotificationResource {
	
	@Autowired
	private JavaMailSender sender;
	
	@GetMapping("/getPersonalDetails/{appid}") 
	String getPersonalDetails(@PathVariable String appid){
		
		return "abhinay.neekhra85@gmail.com,"+appid;
	}
	@PostMapping("/notifyUser/{appid}") 
	String notifyApplication(@PathVariable String appid){
		String returnedVal[] = getPersonalDetails(appid).split(",");
		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		try {
			helper.setTo(returnedVal[0]);
			helper.setText("Hi Customer Id: "+ returnedVal[1]+ ",\n     Contratulations!!! We Offer Provied for Customer :" + returnedVal[1] +"\n Rate of interest : 10% \n Loan Offered 50000 Euro, \n you selected installments 12 months, \n Your EMI would be : 5000 Euro \n\n Best Regards,\n Abhinay Neekhra");
			helper.setSubject("Mail From Hackathon for Customer ID : "+returnedVal[1]);
		} catch (MessagingException e) {
			e.printStackTrace();
			return "Error while sending mail ..";
		}
		sender.send(message);
		return "Mail Sent Success from Hackathon!";
		//return "heelo";
	}	
}
