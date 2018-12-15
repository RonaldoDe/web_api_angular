import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface } from 'src/app/models/book-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: Router) { }
  private books : BookInterface;
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.dataApi.getOffers().subscribe((data: BookInterface) => (this.books = data));
    } else {
      this.route.navigate(['user/login']);
    }
    
  }

}
