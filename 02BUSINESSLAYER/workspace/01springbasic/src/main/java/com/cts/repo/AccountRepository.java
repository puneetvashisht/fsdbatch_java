package com.cts.repo;

import org.springframework.stereotype.Repository;

// Repository in repo packages

@Repository
public class AccountRepository {

	public void fetchAccount(Integer accNo1) {
		
		System.out.println("Usually we will, do db logic here.");
		
	}

}
