import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReservesComponent } from './pages/reserves/reserves.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SuportComponent } from './pages/suport/suport.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'hospede',
        component: GuestsComponent
      },
      {
        path: 'reserva',
        component: ReservesComponent
      },
      {
        path: 'quarto',
        component: RoomsComponent
      },
      {
        path: 'produto',
        component: ProductsComponent
      },
      {
        path: 'funcionario',
        component: EmployersComponent
      },
      {
        path: 'suporte',
        component: SuportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
