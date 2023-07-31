import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishesComponent,
    MenuComponent,
    AboutComponent,
    OrderComponent,
    ReviewComponent,
    FooterComponent,
    LoginComponent,
   SignupComponent,
  
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
