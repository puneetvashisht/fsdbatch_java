package com.cts.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.entity.Course;

@Service
public class CourseService {
	
	@Autowired
	MyDataSource myDataSource;
	
	List<Course> courses = new ArrayList<>();
	
	
	public List<Course> fetchCourses(){
		System.out.println(myDataSource);
		Course course1 = new Course(23, "Angular", "framework by google");
		courses.add(course1);
		return this.courses;
	}
	

}
