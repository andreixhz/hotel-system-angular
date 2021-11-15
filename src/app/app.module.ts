import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { ReservesComponent } from './pages/reserves/reserves.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ServicesComponent } from './pages/services/services.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { SuportComponent } from './pages/suport/suport.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainMenuComponent,
    HomeComponent,
    HeaderComponent,
    GuestsComponent,
    ReservesComponent,
    RoomsComponent,
    ServicesComponent,
    EmployersComponent,
    SuportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
