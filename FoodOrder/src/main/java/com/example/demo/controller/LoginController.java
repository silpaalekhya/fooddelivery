package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.LoginRepository;
import com.example.demo.model.Login;

@RestController
//@RequestMapping("/login")
@CrossOrigin(origins ="http://localhost:4200")
public class LoginController {
	@Autowired
	private LoginRepository repo;
	
	@PostMapping("/login") 
	public ResponseEntity<?> userLogin(@RequestBody Login userData){
		System.out.println(userData);
		Login login=repo.findByEmail(userData.getEmail());
		if(login.getPassword().equals(userData.getPassword()))
				
			return ResponseEntity.ok(login);
		
		return (ResponseEntity<?>) ResponseEntity .internalServerError();
	}

}
