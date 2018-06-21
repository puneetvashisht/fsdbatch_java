package com.cts;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cts.entity.Employee;
import com.cts.repository.EmployeeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TesstEmployee {

	@Autowired
	EmployeeRepository repo;
	
//	@Test
	public void testInsertingEmployee() {
		Employee emp = new Employee("Arun");
		emp.setSalary(20000d);
		repo.addEmployee(emp);
	
	}
//	@Test
	public void testFindingEmployee() {
		repo.findEmployee(2);
	}
	@Test
	public void testRemovingEmployee() {
		repo.removeEmployee(2);
	}
	
//	@Test
	public void testUpdatingEmployeeSalary() {
		repo.updateEmployee(1, 30000d);
	}

}
