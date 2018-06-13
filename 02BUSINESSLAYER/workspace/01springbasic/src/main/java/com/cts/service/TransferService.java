package com.cts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.repo.AccountRepository;

// Need to Inject a dependency.. like AccountRepository
//All beans using annotations should be marked as @Component, doesn't need entry in xml now
@Service
public class TransferService {
	
	
	//Lets do dependency injection using Annotations
	@Autowired
	AccountRepository repository;
	
	public boolean transfer(Integer accNo1, Integer accNo2, Double amount){
		System.out.println("Service orchestration code...");
		repository.fetchAccount(accNo1);
		//hard-coded but in certain conditions will be false
		return true;
	}

	public double checkBalance(int accNo) {
		
		//Some logic here to fetch from DB using repository
//		if() else()
//		now hardcoding
		return 400;
		
	}
	
	// Now how to make annotations work.. lets go to beans.xml

}
