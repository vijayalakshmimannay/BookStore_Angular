import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { CartService } from 'src/app/services/cart.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';


@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  BookId = localStorage.getItem('BookId');

  qty: any;

  Book: any;
  // BookId:any;
  feedbackList : any;



  constructor(private bookService: BookServiceService, private wishlist: WishlistService,private feedback: FeedbackService, private cart: CartService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('BookId')
    console.log(this.BookId);
    this.getBookById(this.BookId);
  }

  getBookById(BookId:any){
    this.bookService.getBookById(BookId).subscribe((response: any) => {
      console.log(response.data);
      this.Book = response.data;
    });
  }

  addToWishlist(){
    let reqData = this.Book.bookId
      
    
    this.wishlist.addToWishlist(reqData).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });
  }

  addToCart(){
    let reqData = {
      bookId : this.Book.BookId,
      quantity : 1
    }
    this.cart.addToCart(reqData).subscribe((response :any) =>{
      console.log(response)
    })
  }
}
