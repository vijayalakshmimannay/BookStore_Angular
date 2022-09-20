import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register/register.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword/forgotpassword.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword/resetpassword.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { OrderComponent } from './components/order/order.component';

import { QuickviewComponent } from './components/quickview/quickview.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetAllBooksComponent,
    OrderComponent,
   
    QuickviewComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
