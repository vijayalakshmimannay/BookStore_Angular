import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword/forgotpassword.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { LoginComponent } from './components/login/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RegisterComponent } from './components/register/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword/resetpassword.component';


const routes: Routes = [
  {path : 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent},
  {path : 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent,

  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'books',component:GetAllBooksComponent},
    {path: 'order',component:OrderComponent},
   {path: 'quickview',component:QuickviewComponent}
  ]
  }

];

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
