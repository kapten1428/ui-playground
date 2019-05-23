import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';
import { ShipOceanComponent } from './ship-ocean/ship-ocean.component';
import { FashionChooseComponent } from './fashion-choose/fashion-choose.component';
import { VaInteractionComponent } from './va-interaction/va-interaction.component';


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
  },
  {
    path: 'fashion-choose',
    component: FashionChooseComponent
  },
  {
    path: 'va',
    component: VaInteractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
