import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token = localStorage.getItem('token')

  constructor(private httpService :HttpService) { }

  addFeedback(reqData : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('Feedback/AddFeedback', reqData, true, header);
  }

  getFeedback(){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('Feedback/GetFeedback', true, header);
  }
}
