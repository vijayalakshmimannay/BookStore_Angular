import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchBook: any){
    console.log(searchBook)
    const Message = [];
    for(const book of value){
      if(book.bookName.toLowerCase().includes(searchBook.toLowerCase()) || book.authorName.toLowerCase().includes(searchBook.toLowerCase())){
        Message.push(book)
      }
    }
    return Message;
  }

}
