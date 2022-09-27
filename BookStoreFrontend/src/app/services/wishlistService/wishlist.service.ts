import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  [x: string]: any;
  token = localStorage.getItem('token');

  constructor(private http:HttpService) { }
  
  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('WishList/GetWishList',true,header);
  }

  addToWishlist(reqData:any){
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    console.log(this.token);
    return this.http.postService('WishList/AddWishList?bookId='+ reqData, null, true, header);
  }
  
  deleteItem(bookId:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.deleteService('WishList/DeleteWishList?bookId='+bookId, true, header)
  }
}
