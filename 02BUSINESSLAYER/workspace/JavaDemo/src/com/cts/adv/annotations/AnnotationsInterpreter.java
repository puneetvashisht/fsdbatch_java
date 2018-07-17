package com.cts.adv.annotations;

import java.lang.reflect.Field;

public class AnnotationsInterpreter {

	public void inject(Class<Employee> employeeClass, Employee emp) {
		Field[] fields = employeeClass.getFields();
		for(Field field : fields){
			System.out.println(field.getName());
			Author auth = field.getAnnotation(Author.class);
			if(auth !=null){
				System.out.println(auth.name());
			}
			else{
				System.out.println("Annotation is null");
			}

//			field.getAnnotation(Author.class).;
			
		}
		
		
	}

}
