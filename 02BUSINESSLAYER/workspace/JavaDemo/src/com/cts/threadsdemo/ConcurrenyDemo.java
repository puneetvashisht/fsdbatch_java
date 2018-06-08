package com.cts.threadsdemo;

import java.util.Set;
import java.util.TreeSet;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class ConcurrenyDemo {
	
	public static void main(String[] args) throws InterruptedException {
		
		Employee emp1 = new Employee(1l, "Ravi", 34433.33);
		Employee emp2 = new Employee(2l, "Priya", 44333.33);
		Employee emp4 = new Employee(20l, "Priya", 24333.33);
		Employee emp3 = new Employee(4l, "Arun", 54433.33);
	
		Set<Employee> employees = new TreeSet<>();
		
		employees.add(emp1);
		employees.add(emp2);
		employees.add(emp3);
		employees.add(emp4);
		employees.add(new Employee(44l, "Shweta", 34543.4));
		//Pre -created thread pool
//		ExecutorService service = Executors.newFixedThreadPool(2);
//		First 2 - served by minimum threads
//		Next 1 - Parked in the Queue
//		Last 2 - Thread counts will be incremented 
		
		ExecutorService service = new ThreadPoolExecutor(2, 5,
                0L, TimeUnit.MILLISECONDS,
                new ArrayBlockingQueue<Runnable>(1));
		
		long startTime = System.currentTimeMillis();
		
		for(Employee emp: employees){
			service.submit(new MyRunnable(emp));
		}
		long endTime = System.currentTimeMillis();
		service.awaitTermination(3, TimeUnit.SECONDS);
		
		System.out.println("Task finished in : " + (endTime - startTime) + " ms");


	}
	

}
