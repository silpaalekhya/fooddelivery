package com.example.demo.model;



import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="Login")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Login {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	//private String userId;
	private String email;
	private String password;
	/*public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}*/
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
