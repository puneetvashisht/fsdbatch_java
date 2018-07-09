package com.cts.repos;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.entities.Employee;

public class EmployeeRepo {
	static SessionFactory sessionFactory;

	static {
		sessionFactory = HibernateUtil.getSessionFactory();
	}

	public void addEmployee(Employee emp) {
		// Physical connection to perform db operations
		Session session = sessionFactory.openSession();

		// Manual transactions
		Transaction tx = session.beginTransaction();
		session.save(emp);

		tx.commit();
		session.close();
		
	}

	@Override
	protected void finalize(){
		HibernateUtil.closeSessionFactory();
	}

	public Employee findEmployee(int id) {
		// Physical connection to perform db operations
		Session session = sessionFactory.openSession();
		Employee emp = session.get(Employee.class, id);
		return emp;
				
	}

}
