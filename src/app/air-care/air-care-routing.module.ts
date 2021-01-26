import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirCarePage } from './air-care.page';

const routes: Routes = [
  {
    path: '',
    component: AirCarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirCarePageRoutingModule {}
