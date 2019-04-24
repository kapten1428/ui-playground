import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';
import { ShipOceanComponent } from './ship-ocean/ship-ocean.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionJourneyComponent,
    MobileJourneyComponent,
    ShipOceanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
