import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataservice : DataServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  Search(event:any){
    console.log(event.target.value)
    this.dataservice.outgoingData(event.target.value)
}
Logout() 
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }

}
