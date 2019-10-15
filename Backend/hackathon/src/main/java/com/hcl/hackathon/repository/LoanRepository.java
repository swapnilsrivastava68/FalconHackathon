//package com.hcl.hackathon.repository;
//
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
//import org.springframework.data.repository.query.Param;
//
//import com.hcl.hackathon.model.LoanDetail;
//
//public interface LoanRepository extends JpaRepositoryImplementation<LoanDetail, Integer> {
//	
//	@Query("SELECT l.personalDetail FROM LoanDetail l WHERE l.id = :appId") 
//	Integer getPersonalIdByloanId(@Param("appId") Integer appId);
//
//}
