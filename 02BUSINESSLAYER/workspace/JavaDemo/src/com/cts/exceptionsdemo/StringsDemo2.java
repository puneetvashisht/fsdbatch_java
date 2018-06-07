package com.cts.exceptionsdemo;

public class StringsDemo2 {

	public static void main(String[] args) {
		StringBuffer str1 = new StringBuffer("Puneet");
		StringBuilder sb;
		String str2 = "Puneet";
		
		str1.append(" Vashisht");
		
		System.out.println(str1);
		
		System.out.println(str1.toString() == str2);

	}

}
