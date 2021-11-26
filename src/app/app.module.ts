import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
import { FilterComponent } from './composition/filter/filter.component';
import { CardsModule } from 'angular-bootstrap-md';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDateComponent } from './components/input-date/input-date.component';
import { MatTableModule } from '@angular/material/table';
import { GuestFormComponent } from './pages/guests/guest-form/guest-form.component';
import { EmployersFormComponent } from './pages/employers/employers-form/employers-form.component';
import { SelectComponent } from './components/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { ServicesFormComponent } from './pages/services/services-form/services-form.component';
import { MatChipsModule } from '@angular/material/chips';
import { ComodidadeComponent } from './pages/rooms/modal/comodidade/comodidade.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ComodidadeCriarComponent } from './pages/rooms/modal/comodidade/comodidade-criar/comodidade-criar.component';
import { RoomsFormComponent } from './pages/rooms/rooms-form/rooms-form.component';
import { ChipSelectorComponent } from './components/chip-selector/chip-selector.component';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReservesFormComponent } from './pages/reserves/reserves-form/reserves-form.component';
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
    SuportComponent,
    FilterComponent,
    InputComponent,
    InputDateComponent,
    GuestFormComponent,
    EmployersFormComponent,
    SelectComponent,
    ServicesFormComponent,
    ComodidadeComponent,
    ComodidadeCriarComponent,
    RoomsFormComponent,
    ChipSelectorComponent,
    ReservesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
