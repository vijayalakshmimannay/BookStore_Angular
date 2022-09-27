import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from './bookService/book-service.service';
import { HttpService } from './httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token = localStorage.getItem('token');
  constructor(private httpservice: HttpService) { }

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Cart/AddToCart', reqData, true, header);
  }

  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Cart/GetItemsInCart', true, header);
  }

  
  remove(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.deleteService('Cart/DeleteItemInCart?cartId='+cartId, true, header);
  }
}