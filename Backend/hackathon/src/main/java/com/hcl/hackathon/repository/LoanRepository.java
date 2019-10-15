package com.hcl.hackathon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.hackathon.model.LoanDetail;
public interface LoanRepository extends JpaRepository<LoanDetail, Integer> {
}
