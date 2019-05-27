import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionJourneyComponent } from './question-journey/question-journey.component';
import { MobileJourneyComponent } from './mobile-journey/mobile-journey.component';
import { ShipOceanComponent } from './ship-ocean/ship-ocean.component';
import { FashionChooseComponent } from './fashion-choose/fashion-choose.component';
import { VaInteractionComponent } from './va-interaction/va-interaction.component';
import { TouhouCardComponent } from './touhou-card/touhou-card.component';
import { NarrowAnimationComponent } from './narrow-animation/narrow-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionJourneyComponent,
    MobileJourneyComponent,
    ShipOceanComponent,
    FashionChooseComponent,
    VaInteractionComponent,
    TouhouCardComponent,
    NarrowAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
