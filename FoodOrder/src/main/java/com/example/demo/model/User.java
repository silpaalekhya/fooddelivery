package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="FoodOrder")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int UserId;
	private String name;
	private String phoneNumber;
	private String yourOrder;
	private String howMuch;
	private String address;
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getYourOrder() {
		return yourOrder;
	}
	public void setYourOrder(String yourOrder) {
		this.yourOrder = yourOrder;
	}
	public String getHowMuch() {
		return howMuch;
	}
	public void setHowMuch(String howMuch) {
		this.howMuch = howMuch;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
		
	}
	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", name=" + name + ", phoneNumber=" + phoneNumber + ", yourOrder=" + yourOrder
				+ ", howMuch=" + howMuch + ", address=" + address + "]";
	}
}

	