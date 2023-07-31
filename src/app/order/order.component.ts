import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit
{
  user:User=new User(); //creating object to user class
  constructor(private orderservice:OrderService){}
  //calling pre-defined method
  ngOnInit(): void {
}
userRegister()
  {
    console.log(this.user);//calling user object
    this.orderservice.userRegister(this.user).subscribe(data=>
      {
        alert('Successfully your order is placed')
        
      },
      error=>alert('User is not registered'));
  }
   
  }

  

