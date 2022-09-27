import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject([]);
  incomingData = this.messageSource.asObservable();

 
  constructor() { }
  outgoingData(message: any) {
    console.log(message)
    this.messageSource.next(message)
}
private getBook = new BehaviorSubject({data:[]});
BookData = this.getBook.asObservable()
changebookData(message:any){
  this.getBook.next(message)
  // console.log("inside data service ===", message);
  
}
}
