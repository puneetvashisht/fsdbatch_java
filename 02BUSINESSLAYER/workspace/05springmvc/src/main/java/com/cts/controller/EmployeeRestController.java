package com.cts.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.entity.Employee;
import com.cts.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
	
	@Autowired
	EmployeeRepository repository;
	


	@RequestMapping(path="/employees", method=RequestMethod.GET)
	@ResponseBody
	public Collection<Employee> fetchEmployees(){
		Collection<Employee> employees = repository.findEmployees();
		System.out.println("Employees the REST controller");
		System.out.println(employees);
		
		
//		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	    return employees;
	}



}
