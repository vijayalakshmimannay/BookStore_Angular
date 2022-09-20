import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem('token')
  }
  register(reqdata:any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('User/Register',reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('User/Login',reqdata,false,header)
  }

  forgotpassword(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('User/ForgetPassword?EmailId='+reqdata.EmailId,{},false,header)
  }

  resetpassword(reqdata: any, token: any){
    console.log(reqdata);
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ token
      })
    }
    return this.httpService.postService('User/ResetLink?password='+reqdata.password+'&confirmPassword='+reqdata.confirmPassword,{},true,header)
  }
}
