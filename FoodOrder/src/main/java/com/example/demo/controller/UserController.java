 package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.User;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserRepository repo;
	
	@PostMapping("/user")
	public ResponseEntity<User> registerUser(@RequestBody User user)
	{
		System.out.println("Controller is called");
		return ResponseEntity.ok(repo.save(user));
	}
}
