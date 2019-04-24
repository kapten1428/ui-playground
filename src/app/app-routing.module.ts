import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';
import { ShipOceanComponent } from './ship-ocean/ship-ocean.component';

const routes: Routes = [
  {
    path: 'question-journey',
    component: QuestionJourneyComponent
  },
  {
    path: 'm-question-journey',
    component: MobileJourneyComponent
  },
  {
    path: 'ship-ocean',
    component: ShipOceanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
