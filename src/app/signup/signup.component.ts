import { Component,OnInit } from '@angular/core';
import { Signup } from '../signup';
import { SignupserviceService } from '../signupservice.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signup:Signup=new Signup();
  constructor(private signupservice:SignupserviceService) { }
  ngOnInit(): void {

  }
  userSignup(){
    console.log(this.signup)
    this.signupservice.userSignup(this.signup).subscribe(data=>{
      alert("You have registered successfull")
    },error=>alert("Please enter valid credentials"));
  }
  }
  

