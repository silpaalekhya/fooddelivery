import { Component ,OnInit} from '@angular/core';
import { Login } from '../login';
import { UserloginService } from '../userlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  constructor(private userloginservice:UserloginService) { }
  ngOnInit(): void {

  }
  userLogin(){
    console.log(this.login)
    this.userloginservice.userLogin(this.login).subscribe(data=>{
      alert("Login Successful")
    },error=>alert("Please enter valid credentials"));
  }
  }
  