package com.hcl.hackathon.controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.hackathon.model.PersonalDetail;
//import com.hcl.hackathon.repository.LoanRepository;
//import com.hcl.hackathon.repository.PersonalDetailsRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 
 * @author Abhinay(abhinay.neekhra85@gmail.com)
 *	Class NotificationResource is used for sending the mail once Application is got successfully sent
 */
@RequestMapping("/rest/hackathon")
@RestController
@Api(value = "Notification Resource", description = "The Notification Service, will send the Loan Offer to the Customer mail")
public class NotificationResource {
	
	private static final Logger logger = LogManager.getLogger(NotificationResource.class);
	
	//Database is need to be added **
		//@Autowired
	//	private PersonalDetailsRepository personalDetailsRepository;
	//	private LoanRepository loanRepository;
	@Autowired
	private JavaMailSender sender;
	
	/***
	 * 
	 * @param appId : appId is generated Loan Id Once application is submitted 
	 * @return PersonalDetail for the the Customer
	 */
	@GetMapping("/getPersonalDetails/{appId}") 
	PersonalDetail getPersonalDetails(@PathVariable Integer appId){
		logger.debug("Currently Entered into getPersonalDetails method");
		//Database is need to be added **
		//int persionalDetailsId = loanRepository.getPersonalIdByloanId(appId);
		//PersonalDetail personalDetail = personalDetailsRepository.findById(persionalDetailsId);
		
		PersonalDetail personalDetail1 = new PersonalDetail();
		personalDetail1.setAddress("address");
		personalDetail1.seteMail("abhinay.neekhra85@gmail.com");
		personalDetail1.setId(appId);
		
		logger.debug("Address"+personalDetail1.getAddress());
		logger.debug("Id"+appId);
		logger.debug("exiting from getPersonalDetails method");
		return personalDetail1;
	}
	
	/***
	 * 
	 * @param appId : appId is generated Loan Id Once application is submitted
	 * @return String response 'Mail Sent Success from Hackathon!'
	 */
	@ApiOperation(value = "Will Send the Notification to Customer And output will be retured as 'Mail Sent Success from Hackathon!'")
    @ApiResponses(
            value = {
                    
                    @ApiResponse(code = 200, message = "Successful Mail Sent Successfully!")
            }
    )
	@PostMapping("/notifyUser/{appId}") 
	String notifyApplication(@PathVariable Integer appId){
		logger.debug("Currently Entered into notifyApplication method");
		PersonalDetail personalDetails = getPersonalDetails(appId);
		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		try {
			helper.setTo(personalDetails.geteMail());
			helper.setText("Hi Customer Id: "+ personalDetails.getId()+ ",\n\n     Contratulations!!! We Offer Provied for Customer :" + personalDetails.getId() +"\n Rate of interest : 10% \n Loan Offered 50000 Euro, \n you selected installments 12 months, \n Your EMI would be : 5000 Euro \n\n Best Regards,\n Abhinay Neekhra");
			helper.setSubject("Mail From Hackathon for Customer ID : "+personalDetails.geteMail());
		} catch (MessagingException e) {
			e.printStackTrace();
			return "Error while sending mail ..";
		}
		sender.send(message);
		logger.debug("Exiting from notifyApplication method");
		return "Mail Sent Success from Hackathon!";
	}	
}
