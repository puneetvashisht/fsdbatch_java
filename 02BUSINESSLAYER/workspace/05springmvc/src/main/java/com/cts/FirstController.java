package com.cts;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class FirstController {
	
	@RequestMapping(path="/hello", method=RequestMethod.GET)
	public String hello(Model model){
//		if condition 1 return "success"
//		else return "login"
		// service and use the return value as some data
		model.addAttribute("message", "Welcome user to this session");
		model.addAttribute("user", "Ravi");
		System.out.println("Hello invoked...");
		return "test";
	}

}
