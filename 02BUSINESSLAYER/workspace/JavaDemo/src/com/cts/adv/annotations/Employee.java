package com.cts.adv.annotations;

import com.cts.adv.annotations.Author.Type;


public class Employee {
	
	@Author(name="Ravi", email="ravi@gmail.com", type=Type.PERMANENT)
	public String name;
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	Employee(){
		
	}

	public void increment(){
		
	}

}
