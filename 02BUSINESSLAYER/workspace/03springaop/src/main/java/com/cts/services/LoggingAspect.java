package com.cts.services;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
	
	@Before("execution(* com.cts.services.*Service.fetchCourse*(..))")
	public void doLogging(JoinPoint jp){
		Object[] args = jp.getArgs();
		System.out.println("Before invoking: " + jp.getSignature());
		
		System.out.println("Printing all input params: ");
		for(Object arg: args){
			System.out.println(arg);
		}
		System.out.println("Aspect code called before the service class");
	}

}
