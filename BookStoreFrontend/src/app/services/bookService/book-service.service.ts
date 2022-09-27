import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token : any;

  constructor(private http:HttpService) {
    this.token = localStorage.getItem('token')
   }

   getallbooks(){
    console.log("Getting books successfully");
    let header = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
        
      })
      
    }
    console.log(this.token);
    
    return this.http.getService('Book/GetAllBooks', true, header)
  }

  
  getBookById(BookId:any){
    console.log(BookId);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.http.getService('Book/GetBookById?BookId=' + BookId, true, header);
  }



  
 
}
