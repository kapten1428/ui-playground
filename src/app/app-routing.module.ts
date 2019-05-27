import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';
import { ShipOceanComponent } from './ship-ocean/ship-ocean.component';
import { FashionChooseComponent } from './fashion-choose/fashion-choose.component';
import { VaInteractionComponent } from './va-interaction/va-interaction.component';
import { TouhouCardComponent } from './touhou-card/touhou-card.component';
import { NarrowAnimationComponent } from './narrow-animation/narrow-animation.component';


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
  },
  {
    path: 'ta',
    component: TouhouCardComponent
  },
  {
    path: 'na',
    component: NarrowAnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
