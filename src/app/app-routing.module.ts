import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ReservesComponent } from './pages/reserves/reserves.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SuportComponent } from './pages/suport/suport.component';
import { GuestFormComponent } from './pages/guests/guest-form/guest-form.component';
import { EmployersFormComponent } from './pages/employers/employers-form/employers-form.component';
import { ServicesFormComponent } from './pages/services/services-form/services-form.component';
import { RoomsFormComponent } from './pages/rooms/rooms-form/rooms-form.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'hospede', component: GuestsComponent },
      { path: 'hospede/criar', component: GuestFormComponent },
      { path: 'hospede/criar/:id', component: GuestFormComponent },
      { path: 'reserva', component: ReservesComponent },
      { path: 'quarto', component: RoomsComponent },
      { path: 'quarto/criar', component: RoomsFormComponent },
      { path: 'quarto/criar/:id', component: RoomsFormComponent },
      { path: 'service', component: ServicesComponent },
      { path: 'service/criar', component: ServicesFormComponent },
      { path: 'service/criar/:id', component: ServicesFormComponent },
      { path: 'funcionario', component: EmployersComponent },
      { path: 'funcionario/criar', component: EmployersFormComponent },
      { path: 'funcionario/criar/:id', component: EmployersFormComponent },
      { path: 'suporte', component: SuportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
