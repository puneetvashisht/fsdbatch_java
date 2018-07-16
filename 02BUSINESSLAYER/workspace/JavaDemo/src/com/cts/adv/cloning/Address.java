package com.cts.adv.cloning;

public class Address implements Cloneable {
	
	
	int houseNumber;
	String location;
	String city;
	
	
	public Address(int houseNumber, String location, String city) {
		super();
		this.houseNumber = houseNumber;
		this.location = location;
		this.city = city;
	}
//	@Override
//	public String toString() {
//		return "Address [houseNumber=" + houseNumber + ", location=" + location + ", city=" + city + "]";
//	}
	public int getHouseNumber() {
		return houseNumber;
	}
	public void setHouseNumber(int houseNumber) {
		this.houseNumber = houseNumber;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Override
	protected Address clone() throws CloneNotSupportedException{
		return (Address)super.clone();
	}

}
