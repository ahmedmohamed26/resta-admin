import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loadingSpinner: boolean;
  filter: any = {};
  items = [
    {
      'cityName': 'nasr city',
      'countPerson': 1000,
      'countPlaces':500
    },
    {
      'cityName': 'maadi',
      'countPerson': 1000,
      'countPlaces':500
    },
    {
      'cityName': '6 october',
      'countPerson': 1000,
      'countPlaces':500
    },
    {
      'cityName': 'helwan',
      'countPerson': 1000,
      'countPlaces':500
    },
    {
      'cityName': 'new cairo',
      'countPerson': 1000,
      'countPlaces':500
    },

  ]
  constructor() {
    this.loadingSpinner = true;
    this.filter = {
      city: '1',
      count:'1'
    }
   }

   ngOnInit(): void {
    setTimeout(() => {
      this.loadingSpinner = false;
    }, 1500);
  }

}
