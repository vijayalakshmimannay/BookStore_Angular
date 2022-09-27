import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { CartService } from 'src/app/services/cart.service';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  book : any
  cartBooks = new Array();
  qty : any
  bookQuantity = 1
  constructor(private cart: CartService, private getBooks:BookServiceService,private router: Router,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.getCartbook();
    // for (var i=0; i<=this.bookList.length;i++){
    //   this.getBookById;
    // }
  }
  getCartbook() {
   
    this.cart.getCartItems().subscribe((response: any) => {
      console.log(response);
      this.cartItems = response.data;
      console.log(this.cartItems)
      this.qty = this.cartItems.length;
      console.log(this.qty)
       this.cartItems.forEach((element: any) => {
        console.log(element)
        this.getBooks.getBookById(element.bookId).subscribe((response:any) =>{
          console.log(response.data)
          this.book = response.data
          this.cartBooks.push(this.book);
        })
      });
    })
    console.log(this.cartBooks); 
  }

  reduce(){
    if(this.bookQuantity > 1){
      this.bookQuantity = this.bookQuantity-1
    }
  }
  increase(){
    if(this.bookQuantity > 0){
      this.bookQuantity = this.bookQuantity+1
    }
  }

  removeCart(bookId : any){
    console.log(bookId);
    this.cart.remove(bookId).subscribe((response : any) =>{
      console.log(response );
      this.router.navigateByUrl('/home/cart')
    })
  
  }

  placeorder(){
    // console.log("book========",book.user_id);
    
    // console.log("book and index========",book.product_id.bookName, i);
    // let Ddata={
      
    //   data:[i,book]
    // }
    this.dataService.changebookData( this.cartBooks)
    this.router.navigateByUrl('/dashboard/order')
  }
  
  // getBookById(){
  //   this.bookService.getBookById(this.bookList=[]).subscribe((response: any) => {
  //     console.log(response.data);
  //     this.cart = response.data;
  //   });
  // }

}
