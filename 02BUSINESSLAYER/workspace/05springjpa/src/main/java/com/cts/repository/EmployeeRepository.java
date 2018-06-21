package com.cts.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cts.entity.Employee;

@Repository
public class EmployeeRepository {
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public void addEmployee(Employee emp){
		em.persist(emp);
	}
	
	
	public void findEmployee(int id){
		Employee emp = em.find(Employee.class, id);
		System.out.println(emp);
	}
	
	@Transactional
	public void removeEmployee(int id){
		Employee emp = em.find(Employee.class, id);
		em.remove(emp);
	}
	
	@Transactional
	public void updateEmployee(int id, double salary){
		Employee emp = em.find(Employee.class, id);
		emp.setSalary(salary);
		System.out.println(emp);
	}

}
