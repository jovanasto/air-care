import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-air-care',
  templateUrl: './air-care.page.html',
  styleUrls: ['./air-care.page.scss'],
  
})
@Injectable()
export class AirCarePage implements OnInit {
  data: any;
  city = '';
  pm25 = 0;
  pm = '';
  satisfactory = false;
  moderate = false;
 unhealthy = false;
 veryunhealthy = false;
 hazard = false;
 

constructor(private http: HttpClient) { 

}

   ngOnInit() {
 this.http.get('https://api.waqi.info/feed/skopje/?token=233f7dd135719d6a0e250868cd4cb4d95e2a6eab').subscribe(data => {
this.data = data;
 this.city = this.data.data.city.name;
 this.pm25 = this.data.data.iaqi.pm25.v;
 this.pm = getPm();
});
     
let getPm = () => {
       if(this.pm25 <= 50){
        this.satisfactory = true;
        return (this.pm25 + ' Air quality is satisfactory');
       }
       else if(this.pm25 <= 100){
        this.moderate = true;
          return (this.pm25 + ' Moderate health concern for people with respiratory illnes');
       }
        else if(this.pm25 <= 150){
         this.moderate = true;
          return (this.pm25 + ' Moderate health concern for people with respiratory illnes');
       }
        else if(this.pm25 <= 200){
        this.unhealthy = true;
         return (this.pm25 + ' Unhealty for sensitive groups');
       }
        else if(this.pm25 <= 300){
        this.veryunhealthy = true;
         return (this.pm25 +' Very unhealthy');
       }
       else
       this.hazard = true;
       
        return (this.pm25, ' Hazard');
     }
  }

}

