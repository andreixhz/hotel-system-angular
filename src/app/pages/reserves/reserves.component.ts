import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.sass']
})
export class ReservesComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Reservas", "Listagem de Reservas")
  }

  ngOnInit(): void {
  }

}
