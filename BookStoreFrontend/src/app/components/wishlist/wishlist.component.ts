import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: any;
  getWishListBooks = new Array()
  //UserId: any;
  bookList: any;
  wishListItems: any;
  qty: any;
  book: any;


  constructor(private bookService: BookServiceService, private wishlistservice: WishlistService) { }
  ngOnInit(): void {
    this. getWishList();
    // this.getbookList();
  }

  // getWishlist() {
  //   this.bookServc.getWishlist().subscribe((response: any) => {
  //     console.log(response.data);
  //     this.wishlist = response.result;
  //   });
  // }

  getWishList() {
    this.wishlistservice.getWishlist().subscribe((response : any) => {
      console.log(response);
      this.wishListItems = response.data
      this.qty = this.wishListItems.length
      this.wishListItems.forEach((element : any) =>{
        console.log(element)
        this.bookService.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getWishListBooks.push(response.data)
        })
      })
      console.log(this.getWishListBooks)
    })
  }

  deleteBook(bookId:any){
    this.wishlistservice.deleteItem(bookId).subscribe((response : any) =>{
      console.log(response);
    })
  }
 

}


