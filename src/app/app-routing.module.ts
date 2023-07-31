import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component' ;
import { DishesComponent } from './dishes/dishes.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{ path: ' ', redirectTo: 'Home',pathMatch:'full'},
{ path: 'Login', component: LoginComponent},
{ path: 'Signup', component: SignupComponent},

{ path: 'Home', component: HomeComponent},
{ path: 'Dishes', component: DishesComponent},
{ path: 'Menu', component: MenuComponent},
{ path: 'About', component: AboutComponent},
{ path: 'Order', component: OrderComponent},
{ path: 'Review', component: ReviewComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
