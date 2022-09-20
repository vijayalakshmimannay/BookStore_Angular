import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  bookList:any;
  totalbooks:any;
  searchBook:any;

  constructor(private bookService: BookServiceService, private data:DataServiceService) { }

  ngOnInit(): void {
    this.getAllBooks();
    
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process",res)
      this.searchBook = res;
    })
  }

  getAllBooks(){ 
    this.bookService.getallbooks().subscribe((response: any) =>{
      console.log(response);
      this.bookList = response.data;
      console.log("List: ", this.bookList);
    })
  }
  quickView(BookId:any){
    localStorage.setItem('BookId',BookId)
  }
  highestPrice(){
    this.bookList= this.bookList.sort((low:any,high:any)=> high.DiscountPrice-low.DiscountPrice);
  }

  lowestPrice(){
    this.bookList= this.bookList.sort((low:any,high:any)=> low.DiscountPrice-high.DiscountPrice);
  }

  newestarrivals(){
    this.bookList.reverse();
  }

}
