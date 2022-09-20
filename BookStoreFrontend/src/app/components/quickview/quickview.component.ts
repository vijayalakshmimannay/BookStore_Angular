import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  Book: any;
  BookId:any;

  constructor(private bookService: BookServiceService) { }

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
}
