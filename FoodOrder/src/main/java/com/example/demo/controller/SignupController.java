
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Signup;
import com.example.demo.repository.SignupRepository;

@RestController
@CrossOrigin(origins= "*")

public class SignupController 
{
	@Autowired
	private SignupRepository repo;
	
	@PostMapping("/signup")
	public ResponseEntity<Signup> registerUser(@RequestBody Signup signup)
	{
		System.out.println("Controller is called");
		return ResponseEntity.ok(repo.save(signup));
	}
}
