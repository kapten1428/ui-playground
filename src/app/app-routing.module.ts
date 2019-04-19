import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';

const routes: Routes = [
  {
    path: 'question-journey',
    component: QuestionJourneyComponent
  },
  {
    path: 'm-question-journey',
    component: MobileJourneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
