import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { TicketComponent } from './ticket/ticket.component';
import { SectionPayingComponent } from './section-paying/section-paying.component';
import { HowMuchComponent } from './how-much/how-much.component';
import {FormsModule} from '@angular/forms';
import { CheckPointsComponent } from './check-points/check-points.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionOneComponent,
    TicketComponent,
    SectionPayingComponent,
    HowMuchComponent,
    CheckPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
