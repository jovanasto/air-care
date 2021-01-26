import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IonicModule } from '@ionic/angular';

import { AirCarePageRoutingModule } from './air-care-routing.module';

import { HttpClient } from '@angular/common/http';
import { AirCarePage } from './air-care.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirCarePageRoutingModule,
    LeafletModule,


  ],
  declarations: [AirCarePage],

})
export class AirCarePageModule {
 
}
