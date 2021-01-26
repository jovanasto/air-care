import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {
 data: any;
 city: '';
 uvi: [] = [];



constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://api.waqi.info/feed/here/?token=233f7dd135719d6a0e250868cd4cb4d95e2a6eab').subscribe(any => {
     this.data = any;
     console.log(this.data);
      this.city = this.data.data.city.name;
    this.uvi = this.data.data.forecast.daily.uvi;
    console.log(this.uvi);
          
     
    });
  }

}

